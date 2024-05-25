import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Typography,
  TextField,
  FormControl,
  Button,
  FormHelperText,
} from "@mui/material";

const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Name is Required")
            .trim(),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is Required")
            .lowercase()
            .trim(),
          password: Yup.string()
            .required("Password is required.")
            .trim()
            .max(21, "Password must be at max 21 characters."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(Formik) => {
          return (
            <form
              onSubmit={Formik.handleSubmit}
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                gap: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h2">Register here</Typography>

              <FormControl>
                <TextField label="Name" {...Formik.getFieldProps("name")} />
                {Formik.touched.name && Formik.errors.name ? (
                  <FormHelperText error>{Formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField label="Email" {...Formik.getFieldProps("email")} />
                {Formik.touched.email && Formik.errors.email ? (
                  <FormHelperText error>{Formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Password"
                  {...Formik.getFieldProps("password")}
                />
                {Formik.touched.password && Formik.errors.password ? (
                  <FormHelperText error>
                    {Formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
