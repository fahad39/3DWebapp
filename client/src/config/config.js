const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1",
    stripePublicKey:
      "pk_test_51QkRV3INt3r69nGPCuo0ac7OvQir2cq3VdSWrhfn31LZTg3VVAqAWLPO0S69eZUWbkaiFMfVd12esT6IDUuXFRW900ul18ACdq",
  },
  production: {
    backendUrl: "https://threedwebapp-akbh.onrender.com/api/v1",
    stripePublicKey:
      "pk_test_51QkRV3INt3r69nGPCuo0ac7OvQir2cq3VdSWrhfn31LZTg3VVAqAWLPO0S69eZUWbkaiFMfVd12esT6IDUuXFRW900ul18ACdq",
  },
};

export default config;
