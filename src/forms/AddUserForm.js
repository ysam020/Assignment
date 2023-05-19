import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { validationSchema } from "../schemas/AddUserSchema";
import CircularProgress from "@mui/material/CircularProgress";
import { UserContext } from "../contexts/Context";
import "../styles/form.css";
import { addUser } from "../utils/addUser";

const AddUserForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const userContext = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      addUser(values, setLoading, setMessage, userContext);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          margin="dense"
          variant="filled"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          size="small"
          margin="dense"
          variant="filled"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          size="small"
          margin="dense"
          variant="filled"
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          inputProps={{ maxLength: 10 }}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Button
          className="SubmitFormButton"
          fullWidth
          type="submit"
          disabled={loading} // button will be disabled while loading is true, i.e form is submitting
        >
          {loading ? (
            <CircularProgress
              sx={{
                width: "30px !important",
                height: "30px !important",
                marginLeft: "10px",
              }}
            />
          ) : (
            "Add user"
          )}
        </Button>
      </form>

      <p style={{ textAlign: "center", marginTop: "15px" }}>{message}</p>
    </>
  );
};

export default AddUserForm;
