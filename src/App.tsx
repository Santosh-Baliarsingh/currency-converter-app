import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./App.style";
import logo from "./assets/logo.png";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { AiOutlineSwap } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdDangerous } from "react-icons/md";
import { useEffect, useState , useCallback } from "react";
import axios from "axios";

interface ICurrency {
  name: string;
  symbol: string;
}

interface ICountry {
  name: {
    common: string;
  };
  currencies: {
    [key: string]: ICurrency;
  };
  flags: {
    png: string;
  };
}

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selectFromCountry, setSelectFromCountry] =
    useState("Select a country");
  const [selectToCountry, setSelectToCountry] = useState("Select a country");
  const [fromCurrencyValue, setFromCurrencyValue] = useState(0);
  const [toCurrencyValue, setToCurrencyValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  
  const apiKey = import.meta.env.VITE_API_KEY;

  console.log(countries);

  const fetchCountryData = async () => {
    await axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const convertCurrency = useCallback(async (fromCurrency: string, toCurrency: string) => {
    try {
      const response = await axios.get(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&baseCurrency=${fromCurrency}&targetCurrency=${toCurrency}`
      );
  
      if (response.data.data[toCurrency] === undefined) {
        setErrorMessage(
          `The currency ${toCurrency} is not supported by the API. Please select other currencies!`
        );
      } else {
        setErrorMessage("");
      }
  
      console.log(response.data.data[toCurrency]);
      return response.data.data[toCurrency];
    } catch (error) {
      setErrorMessage("An error occurred while fetching the currency data.");
    }
  }, [apiKey]);

  useEffect(() => {
    fetchCountryData();
  }, []);

  useEffect(() => {
    if (
      selectFromCountry !== "Select a country" &&
      selectToCountry !== "Select a country"
    ) {
      const fromCurrency = selectFromCountry.split(" - ")[1];
      const toCurrency = selectToCountry.split(" - ")[1];
      convertCurrency(fromCurrency, toCurrency).then((rate) => {
        setToCurrencyValue(parseFloat((rate * fromCurrencyValue).toFixed(4)));
      });
    }
  }, [selectFromCountry, selectToCountry, fromCurrencyValue , convertCurrency]);

  const getFromCurrencySymbol = (countryName: string) => {
    if (countryName === "") {
      console.log("countryName is in its initial state");
      return "$"; // default currency symbol
    }
    const actualCountryName = countryName.split(" - ")[0];
    const country = countries.find((c) => c.name.common === actualCountryName);

    if (country) {
      const currency = country.currencies[Object.keys(country.currencies)[0]];

      if (currency) {
        return currency.symbol;
      }
    }

    return "$";
  };

  const getToCurrencySymbol = (countryName: string) => {
    if (countryName === "") {
      console.log("countryName is in its initial state");
      return "₹"; // default currency symbol
    }
    const actualCountryName = countryName.split(" - ")[0];
    const country = countries.find((c) => c.name.common === actualCountryName);

    if (country) {
      const currency = country.currencies[Object.keys(country.currencies)[0]];

      if (currency) {
        return currency.symbol;
      }
    }

    return "₹";
  };

  const handleSwap = () => {
    const tempCountry = selectFromCountry;
    const tempValue = fromCurrencyValue;

    setSelectFromCountry(selectToCountry);
    setFromCurrencyValue(toCurrencyValue);

    setSelectToCountry(tempCountry);
    setToCurrencyValue(tempValue);

    const fromCurrency = selectToCountry.split(" - ")[1];
    const toCurrency = selectFromCountry.split(" - ")[1];
    convertCurrency(fromCurrency, toCurrency).then((rate) => {
      setToCurrencyValue(parseFloat((rate * fromCurrencyValue).toFixed(2)));
    });
  };

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.converterBox}>
          <Box sx={styles.sidebar}>
            <Box sx={styles.sidebarBox}>
              <Box sx={styles.logo} component="img" src={logo} />
              <Box sx={styles.helpIcon}>
                <TbHelpHexagonFilled />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.appSection}>
            <Box sx={styles.appsectionheadBox}>
              <Box>
                <Typography sx={styles.appheading}>
                  Currency Converter
                </Typography>
                <Typography>Today , 12.03.2024 18:27</Typography>
              </Box>

              <Box sx={styles.mode}>
                <MdDarkMode />
              </Box>
            </Box>
            <Box sx={styles.selectBox}>
              <Box sx={styles.fromSelect}>
                <FormControl fullWidth variant="standard">
                  <InputLabel shrink style={{ fontSize: 20, fontWeight: 600 }}>
                    From
                  </InputLabel>
                  <Select
                    value={selectFromCountry}
                    onChange={(event) =>
                      setSelectFromCountry(event.target.value as string)
                    }
                    sx={styles.select}
                  >
                    <MenuItem sx={styles.menuItem} value="Select a country">
                      Select a country
                    </MenuItem>
                    {countries.map(
                      (country) =>
                        country.name &&
                        country.currencies &&
                        country.flags && (
                          <MenuItem
                            key={country.name.common}
                            sx={styles.menuItem}
                            value={`${country.name.common} - ${
                              Object.keys(country.currencies)[0]
                            }`}
                          >
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              width="100%"
                            >
                              <span>
                                {country.name.common} -{" "}
                                {Object.keys(country.currencies)[0]}
                              </span>
                              <img
                                src={country.flags.png}
                                alt={country.name.common}
                                width="25"
                                height="18"
                              />
                            </Box>
                          </MenuItem>
                        )
                    )}
                  </Select>
                </FormControl>
              </Box>
              <Box onClick={handleSwap} sx={styles.swapBtn}>
                <AiOutlineSwap />
              </Box>
              <Box sx={styles.toSelect}>
                <FormControl fullWidth variant="standard">
                  <InputLabel shrink style={{ fontSize: 20, fontWeight: 600 }}>
                    To
                  </InputLabel>
                  <Select
                    value={selectToCountry}
                    onChange={(event) =>
                      setSelectToCountry(event.target.value as string)
                    }
                    sx={styles.select}
                  >
                    <MenuItem sx={styles.menuItem} value="Select a country">
                      Select a country
                    </MenuItem>
                    {countries.map(
                      (country) =>
                        country.name &&
                        country.currencies &&
                        country.flags && (
                          <MenuItem
                            key={country.name.common}
                            sx={styles.menuItem}
                            value={`${country.name.common} - ${
                              Object.keys(country.currencies)[0]
                            }`}
                          >
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              width="100%"
                            >
                              <span>
                                {country.name.common} -{" "}
                                {Object.keys(country.currencies)[0]}
                              </span>
                              <img
                                src={country.flags.png}
                                alt={country.name.common}
                                width="25"
                                height="18"
                              />
                            </Box>
                          </MenuItem>
                        )
                    )}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={styles.textFieldBox}>
              <Box sx={styles.fromTextField}>
                <TextField
                  type="number"
                  variant="standard"
                  placeholder={fromCurrencyValue === 0 ? "0" : undefined}
                  value={fromCurrencyValue === 0 ? "" : fromCurrencyValue}
                  onChange={(event) =>
                    setFromCurrencyValue(Number(event.target.value))
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{ fontSize: { xs: "40px", md: "70px" } }}
                        >
                          {getFromCurrencySymbol(selectFromCountry)}
                        </Typography>
                      </InputAdornment>
                    ),
                    sx: {
                      border: "none",
                      fontSize: { xs: "30px", md: "50px" },
                      cursor: "text",
                    },
                  }}
                  fullWidth
                  sx={styles.textField}
                />
              </Box>
              <Box sx={styles.toTextField}>
                <TextField
                  type="number"
                  placeholder={toCurrencyValue === 0 ? "0" : undefined}
                  value={
                    toCurrencyValue === 0 ? "" : toCurrencyValue.toFixed(2)
                  }
                  onChange={(event) =>
                    setToCurrencyValue(Number(event.target.value))
                  }
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          sx={{ fontSize: { xs: "40px", md: "70px" } }}
                        >
                          {getToCurrencySymbol(selectToCountry)}
                        </Typography>
                      </InputAdornment>
                    ),
                    sx: {
                      border: "none",
                      fontSize: { xs: "30px", md: "50px" },
                      cursor: "text",
                    },
                  }}
                  fullWidth
                  sx={styles.textField}
                />
              </Box>
            </Box>
            {errorMessage && (
              <Box sx={styles.errorBox}>
                <MdDangerous style={{ color: "red", fontSize: "25px" }} />
                <Typography sx={styles.error}>{errorMessage}</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
