import React, { useState, useEffect } from "react";
import "./Reservation.css";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { ThemeProvider, createTheme } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { frFR } from "@mui/x-date-pickers";
import "dayjs/locale/fr";

export default function Reservation() {
  const [departSuggestions, setDepartSuggestions] = useState([]);
  const [destSuggestions, setDestSuggestions] = useState([]);
  const [focusedField, setFocusedField] = useState(null);
  const [formDatas, setFormDatas] = useState({
    depart: "",
    destination: "",
    date: "",
    heure: "",
    infos: "",
    portable: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async (query, setSuggestions) => {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${query}&limit=5`
      );
      const data = await response.json();
      const features = data.features.map((feature) => feature.properties.label);
      setSuggestions(features);
    };

    if (formDatas.depart.length > 4 || formDatas.destination.length > 4) {
      if (focusedField === "depart") {
        fetchData(formDatas.depart, setDepartSuggestions);
      } else if (focusedField === "destination") {
        fetchData(formDatas.destination, setDestSuggestions);
      }
    }
  }, [formDatas.depart, formDatas.destination, focusedField]);

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setFormDatas({ ...formDatas, [id]: value });
  };

  const handleSelectAddress = (key, address) => {
    setFormDatas({ ...formDatas, [key]: address });
    console.log({ key: address });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setFocusedField(null);
    }, 100);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e8e2d9",
      },
    },
  });
  console.log(formDatas);
  return (
    <ThemeProvider theme={theme}>
      <div id="reservation">
        <section className="reservation-container">
          <h2>Réserver une course</h2>
          <Box
            className="reservation-form"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="address-section">
              <TextField
                className="adresse"
                id="depart"
                label="Départ"
                variant="outlined"
                value={formDatas.depart}
                onChange={handleChangeInput}
                onFocus={() => handleFocus("depart")}
                onBlur={handleBlur}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e8e2d9",
                      borderWidth: 2,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#e8e2d9",
                    },
                  },
                }}
              />
              {focusedField === "depart" && (
                <ul>
                  {departSuggestions.map((address, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectAddress("depart", address)}
                    >
                      {address}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="address-section">
              <TextField
                className="adresse"
                id="destination"
                label="Destination"
                variant="outlined"
                value={formDatas.destination}
                onChange={handleChangeInput}
                onFocus={() => handleFocus("destination")}
                onBlur={handleBlur}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e8e2d9",
                      borderWidth: 2,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder":
                      {
                        color: "#978365",
                      },
                  },
                }}
              />
              {focusedField === "destination" && (
                <ul>
                  {destSuggestions.map((address, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        handleSelectAddress("destination", address)
                      }
                    >
                      {address}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <LocalizationProvider
              adapterLocale="fr"
              localeText={
                frFR.components.MuiLocalizationProvider.defaultProps.localeText
              }
              dateAdapter={AdapterDayjs}
            >
              <DatePicker
                onChange={handleChangeInput}
                id="date"
                label="Date"
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e8e2d9",
                      borderWidth: 2,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder":
                      {
                        color: "#978365",
                      },
                  },
                }}
              />
              <TimePicker
                onChange={handleChangeInput}
                id="heure"
                clearable
                ampm={false}
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e8e2d9",
                      borderWidth: 2,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder":
                      {
                        color: "#978365",
                      },
                  },
                }}
                label="Heure de départ"
              />
            </LocalizationProvider>
            <TextField
              onChange={handleChangeInput}
              id="infos"
              label="Informations complémentaires"
              multiline
              rows={4}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#e8e2d9 !important",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#e8e2d9",
                  },
                  "&:hover fieldset": {
                    borderColor: "#e8e2d9",
                    borderWidth: 2,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#e8e2d9",
                  },
                  "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder": {
                    color: "#978365",
                  },
                },
              }}
            />
            <div className="reservation-contact">
              <TextField
                onChange={handleChangeInput}
                className="portable"
                id="portable"
                label="Portable"
                variant="outlined"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e8e2d9",
                      width: "100% !important",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e8e2d9",
                      borderWidth: 2,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#e8e2d9",
                    },
                  },
                }}
              />

              <TextField
                onChange={handleChangeInput}
                className="email"
                id="email"
                label="E-mail"
                variant="outlined"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#e8e2d9 !important",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e8e2d9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#e8e2d9",
                      borderWidth: 2,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#e8e2d9",
                    },
                  },
                }}
              />
            </div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                backgroundColor: "#e8e2d9",
                color: "#978365",
                "&:hover": {
                  backgroundColor: "#38352e",
                  color: "#e8e2d9 ! important",
                },
              }}
            >
              Envoyer
            </Button>
          </Box>
        </section>
      </div>
    </ThemeProvider>
  );
}
