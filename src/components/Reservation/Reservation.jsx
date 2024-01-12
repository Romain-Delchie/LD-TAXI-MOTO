import React from "react";
import "./Reservation.css";
import TextField from "@mui/material/TextField";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Box from "@mui/material/Box";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ThemeProvider, createTheme } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { frFR } from "@mui/x-date-pickers";
import 'dayjs/locale/fr'

export default function Reservation() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e8e2d9",
      },
    },
  });
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
            <TextField className="adresse" id="depart" label="Départ" variant="outlined" sx={{
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
            }
            } />
            <TextField className="adresse" id="destination" label="Destination" variant="outlined" sx={{
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
                  color: "#978365"
                }
              }
            }} />
            <LocalizationProvider adapterLocale="fr" localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
              <DatePicker label="Date" sx={{
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
                  "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder": {
                    color: "#978365"
                  }
                }
              }} />
              <TimePicker
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
                    "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder": {
                      color: "#978365"
                    }
                  }
                }}
                label="Heure de départ"
              />
            </LocalizationProvider>
            <TextField
              id="outlined-multiline-static"
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
                    color: "#978365"
                  }
                }
              }}
            />
            <div className="reservation-contact">
              <TextField className="portable" id="portable" label="Portable" variant="outlined" sx={{
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
              }
              } />

              <TextField className="email" id="email" label="E-mail" variant="outlined" sx={{
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
              }
              } />
            </div>
            <Button variant="contained" endIcon={<SendIcon />}
              sx={{
                backgroundColor: '#e8e2d9',
                color: '#978365',
                '&:hover': {
                  backgroundColor: '#38352e',
                  color: '#e8e2d9 ! important',
                },
              }}>
              Envoyer
            </Button>
          </Box>
        </section>
      </div>
    </ThemeProvider>
  );
}
