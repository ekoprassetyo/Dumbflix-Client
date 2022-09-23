import React, {useEffect} from "react";

import { Form, Button } from "react-bootstrap";
import {IconTransfer} from 'react-icons/ri'
import { UserContext } from "../../context/userContext";
import { useContext,useState } from "react";
import { useMutation } from "react-query"
import { useNavigate} from "react-router-dom"
import API from '../../config/api'
import { useRef } from "react";

function PaymentHome() {
  const navigate = useNavigate()
  const [state] = useContext(UserContext)
  console.log(state)
  const [previewSrc, setPreviewSrc] = useState(null);
  const [file, setFile] = useState(null);
  
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-aDYXJFh6Atm_jUfl";
  
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
  
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handlePayment = useMutation (async (event) => {
    try {
      event.preventDefault()

      const config = {
        headers : {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          }
        }
      }

      let result = await API.post("/transaction", config)
      console.log(result)

      // create variable token for store token payment from response here
      const token = result.data.data.token

      // init snap for display payment page with token here
      window.snap.pay(token, {
        onSuccess: function (result) {
          navigate("/profile")
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("You closed the popup without finishing the payment");
        },
      })

    } catch (err) {
      console.log(err)
    }
  })

  const onChangeFiles = (event) => {
    let fileInfo = event.target.files[0]
    setFile(fileInfo)

    let reader = new FileReader()

    if (event.target.files.length === 0) {
      return
    }

    reader.onloadend = (event) => {
      setPreviewSrc([reader.result])
    }

    reader.readAsDataURL(fileInfo)
  }

  const inputFileRef = useRef(null)

  const btnOnClick = () => {
    inputFileRef.current.click()
  }
  return (
    <div className="container-fluid sectionPayment" style={{marginTop:"150px"}}>
      <div className="text-center text-light">
        <h1 className="fs-2 fw-bold mb-5 text-danger">Premium</h1>
        <p className="Payment">
          Cukup Bayar 30.000 Sekarang dan nikmati streaming film-film kekinian hanya di {" "}
          <span className="text-danger fw-bold">DUMBFLIX</span>
        </p>

        <div>
          <p className="text-danger fw-bold">
            SUBSCRIBE NOW <span className="text-light">: -</span>{" "}
          </p>
        </div>

        <Form style={{width:"30%", margin: "20px auto"}}>
          <Button onClick={(event) => handlePayment.mutate(event)}  variant="danger" type="submit" className="border-0 btnSubmitPayment py-2 fw-bold">
            Subsribe Now
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PaymentHome;
