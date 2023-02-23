import React, { FC, useState } from "react";
import styles from "./index.module.css";

type FormInput = {
  firstName: {
    error: string;
    value: string;
  };
  lastName: {
    error: string;
    value: string;
  };
};

type FormInputFormEvent = {
  [key in keyof FormInput]: {
    value: string;
  };
};

export const Form: FC = () => {
  const [input, setInput] = useState<FormInput>({
    firstName: {
      error: "",
      value: "",
    },
    lastName: {
      error: "",
      value: "",
    },
  });

  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => {
      return {
        ...prev,
        firstName: {
          ...prev.firstName,
          value: e.target.value,
          error: validateFormInputFirstName(e.target.value),
        },
      };
    });
  };

  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => {
      return {
        ...prev,
        lastName: {
          ...prev.lastName,
          value: e.target.value,
          error: validateFormInputLastName(e.target.value),
        },
      };
    });
  };

  const onSubmitFormInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormInputFormEvent;
    console.log(target.firstName.value, target.lastName.value);
  };

  const disabledSubmitButton =
    !Boolean(input.firstName.value) ||
    !Boolean(input.lastName.value) ||
    Boolean(input.firstName.error) ||
    Boolean(input.lastName.error);

  return (
    <form className={styles.root} onSubmit={onSubmitFormInput}>
      <div>
        <div className={styles.formItem}>
          <label htmlFor="firstName">名</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="名"
            onChange={onChangeFirstName}
            value={input.firstName.value}
          ></input>
        </div>
        {input.firstName.error && (
          <p className={styles.errorText}>{input.firstName.error}</p>
        )}
      </div>
      <div>
        <div className={styles.formItem}>
          <label htmlFor="lastName">姓</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="姓"
            onChange={onChangeLastName}
            value={input.lastName.value}
          ></input>
        </div>
        {input.lastName.error && (
          <p className={styles.errorText}>{input.lastName.error}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={disabledSubmitButton}
        className={styles.submitButton}
      >
        提出
      </button>
    </form>
  );
};

const validateFormInputFirstName = (firstName: unknown): string => {
  let error = "";
  if (firstName === "") {
    error = "名が入力されていません";
  }
  return error;
};
const validateFormInputLastName = (lastName: unknown): string => {
  console.log({ lastName });
  let error = "";
  if (lastName === "") {
    console.log(lastName === "");
    error = "姓が入力されていません";
  }
  return error;
};
