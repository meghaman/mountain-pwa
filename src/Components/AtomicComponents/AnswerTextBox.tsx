import { createStyles, makeStyles, TextField } from "@material-ui/core";
import React from "react";
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
    labelRoot: {
      fontSize: "16px",
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
  const { control } = useForm({ mode: "onChange" });

  const isCorrect = () => {
    props.onCorrectAnswer(props.cacheNumber);
  };

  return (
    <Controller
      name="cache"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={
            error ? "" : value ? "Correct" : `Cache #${props.cacheNumber + 1}`
          }
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
            },
          }}
          variant="outlined"
          value={value}
          onChange={(e) => {
            onChange(e);
            if (
              e.target.value &&
              parseInt(e.target.value) === props.correctAnswer
            )
              isCorrect();
          }}
          error={!!error}
          className={error ? "" : value ? classes.correctAnswer : ""}
        />
      )}
      rules={{ pattern: new RegExp(`^${props.correctAnswer}$`) }}
    />
  );
};

export default AnswerTextBox;
