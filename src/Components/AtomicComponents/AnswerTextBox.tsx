import { createStyles, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles(() => {
  return createStyles({
    correctAnswer: {
      "& input:valid + fieldset": {
        borderColor: "green",
        borderWidth: "2px",
        color: "black",
      },
      "& input:valid": {
        background: "lightGreen",
      },
    },
  });
});

interface IProps {
  cacheNumber: number;
  correctAnswer: number;
  //onCorrectAnswer(): void;
}

const AnswerTextBox: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { control, formState, getValues } = useForm({ mode: "onChange" });

  if (!formState.errors.cache && getValues("cache")) {
    console.log("Correct Answer");
  }

  return (
    <Controller
      name="cache"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={`Cache #${props.cacheNumber + 1}`}
          variant="outlined"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? "Wrong Answer!" : value ? "Correct Answer!" : ""}
          className={error ? "" : value ? classes.correctAnswer : ""}
        />
      )}
      rules={{ pattern: new RegExp(`^${props.correctAnswer}$`) }}
    />
  );
};

export default AnswerTextBox;
