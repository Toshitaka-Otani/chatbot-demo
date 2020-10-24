import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextInput from "./TextInput";

const FormDialog = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputDiscription = (event) => {
    setDescription(event.target.value);
  };

  const submitFrom = () => {
    const payload = {
      text:
        "お問い合わせがありました\n" +
        "お名前:" +
        name +
        "\n" +
        "Email:" +
        email +
        "\n" +
        "お問い合わせ内容:\n" +
        description,
    };
    console.log('payload')
    console.log(payload)

    const url =
      "https://hooks.slack.com/services/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";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信が完了しました。追ってご連絡します！");
      setName("");
      setEmail("");
      setDescription("");
      return props.handleClose();
    });
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClickClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      <DialogContent>
        <TextInput
          label={"お名前(必須)"}
          multiline={false}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <TextInput
          label={"メールアドレス(必須)"}
          multiline={false}
          rows={1}
          value={email}
          type={"email"}
          onChange={inputEmail}
        />
        <TextInput
          label={"お問い合わせ内容(必須)"}
          multiline={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDiscription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={submitFrom} color="primary" autoFocus>
          送信する
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
