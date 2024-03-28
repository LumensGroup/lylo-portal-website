export default {

  "collection_location": {
      "id": 0,
      "address_full": "KINTO One Centre (Midview City)",
      "postal_code": "573969",
      "built_in": false
  },
  "return_location": {
      "id": 0,
      "address_full": "KINTO One Centre (Midview City)",
      "postal_code": "573969",
      "built_in": false
  },
  "add_on_options": [
    //   {
    //       "add_on_option_id": "2",
    //       "quantity": 1
    //   },
    //   {
    //       "add_on_option_id": "3",
    //       "quantity": 1
    //   },
    //   {
    //       "add_on_option_id": "4",
    //       "quantity": 1
    //   },
    //   {
    //       "add_on_option_id": "7",
    //       "quantity": 1
    //   },
    //   {
    //       "add_on_option_id": "8",
    //       "quantity": 1
    //   },
    //   {
    //       "add_on_option_id": "9",
    //       "quantity": 1
    //   },
    //   {
    //       "add_on_option_id": "10",
    //       "quantity": 1
    //   }
  ],
  "collection_time": "2024-04-05T09:00:00+07:00",
  "return_time": "2024-04-10T09:00:00+07:00",
  "details": [
      {
          "item_id": "1"
      }
  ],
  "vouchers": [
     {
            "code":"saul_Free_Add-On"
        },
        {
            "code":"saul_-10"
        }
  ],
  "drivers": [
      {
          "email": "phamhaichauhc@gmail.com",
          "first_name": "XIAO",
          "last_name": "MENGLU",
          "phone_number": "+65999999999",
          "dob": "1990-10-06T00:00:00Z",
          "nationality": "MY",
          "address": "288A JURONG EAST STREET 21, #8-367, SINGAPORE 601288",
          "licenses": [
              {
                  "type": "LICENSE",
                  "issued_date": "2018-06-06T00:00:00Z",
                  "class": "3",
                  "valid": "VALID",
                  "country": "SG"
              },
              {
                  "type": "NRIC",
                  "license_number": "S0958801I",
                  "country": "SG"
              }
          ],
          "type": "MAIN",
          "metadata": {
              "singpass": "{\"id\":\"598\",\"created\":\"2024-01-18T04:22:49.732Z\",\"updated\":\"2024-01-26T09:55:10.336Z\",\"deleted\":null,\"fullName\":\"XIAO MENGLU\",\"phoneNumber\":\"65-80193751\",\"email\":\"dbstesting01@gmail.com\",\"nric\":\"S0958801I\",\"dateOfBirth\":\"1990-10-06\",\"address\":\"288A JURONG EAST STREET 21, #8-367, SINGAPORE 601288\",\"licenseClass\":\"3\",\"licenseIssueDate\":\"2018-06-06T00:00:00.000Z\",\"licenseExpiryDate\":null,\"licenceValidity\":\"VALID\",\"nationality\":\"MY\",\"passType\":\"\",\"passStatus\":\"\"}"
          }
      },
      {
          "type": "ADDITION",
          "first_name": "Add Driver A",
          "last_name": "John",
          "phone_number": "+65992993995"
      },
      {
          "type": "ADDITION",
          "first_name": "Add Driver B",
          "last_name": "Justin",
          "phone_number": "+65284329241"
      }
  ],
  "is_singpass": true,
  "source": "WEB"
}

/*
const getPaymentIntent = (orderId: any) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Creating Order...",
    });

    request
      .post(`/payment/intent?order_id=${orderId}`)
      .then((res) => {
        console.log(res);

        messageApi.open({
          key,
          type: "success",
          content: "Created!",
        });
        const orderId = get(res, "id");
        // checkOut(orderId);
      })
      .catch((e) => {
        console.log(e.data.message);

        notification.error({
          message: `Notification`,
          description: e?.statusText,
          placement: "topRight",
        });
      });
  };

*/