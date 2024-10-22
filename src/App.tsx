import { useEffect, useState } from "react";
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function App() {
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [secret, setSecret] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    console.log(CryptoJS.enc.Hex.parse("afa916af8e309cfa"));
    try {
      const decryptedMessage = AES.decrypt(
        encryptedMessage,
        CryptoJS.enc.Hex.parse("afa916af8e309cfa"),
        {
          iv: CryptoJS.enc.Hex.parse("95fded5121f61960")
        }
      );

      const o = decryptedMessage.toString();
      setOutput(o);
      console.log(o);
    } catch (error) {
      console.log(error);
    }
  }, [secret, encryptedMessage]);

  return (
    <>
      <div className="max-w-3xl my-10 mx-auto">
        <h2 className="text-2xl font-medium mb-10">AES Decryptor</h2>

        <Label htmlFor="secret">Secret</Label>
        <Input
          name="secret"
          id="secret"
          type="text"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />

        <Label htmlFor="encryptedMessage">Encrypted Message</Label>
        <Input
          name="encryptedMessage"
          id="encryptedMessage"
          type="text"
          value={encryptedMessage}
          onChange={(e) => setEncryptedMessage(e.target.value)}
        />

        <br />

        <Label>Output:</Label>
        <Input style={{ width: "100%" }} value={output} />
        <pre className="text-wrap">{output}</pre>
      </div>
    </>
  );
}

export default App;
