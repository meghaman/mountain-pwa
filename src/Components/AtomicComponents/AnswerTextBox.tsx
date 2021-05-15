import { createStyles, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles(() => {
  return createStyles({
    correctAnswer: {
      "& input:valid + fieldset": {
        borderColor: "#96ffaa",
        borderWidth: "2px",
        color: "black",
      },
      "& input:valid": {
        background: "#96ffaa",
      },
    },
  });
});

interface IProps {
  cacheNumber: number;
  correctAnswer: number;
  onCorrectAnswer(cacheNumber: number): void;
}

const AnswerTextBox: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { control, formState, watch } = useForm({ mode: "onChange" });

  const watchCache = watch(["cache"]);

  if (!formState.errors.cache && watchCache[0]) {
    props.onCorrectAnswer(props.cacheNumber);
  }

  return (
    <Controller
      name="cache"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={
            error ? "" : value ? "Correct" : `Photo #${props.cacheNumber + 1}`
          }
          variant="outlined"
          value={value}
          onChange={onChange}
          error={!!error}
          className={error ? "" : value ? classes.correctAnswer : ""}
        />
      )}
      rules={{ pattern: new RegExp(`^${props.correctAnswer}$`) }}
    />
  );
};

export default AnswerTextBox;
