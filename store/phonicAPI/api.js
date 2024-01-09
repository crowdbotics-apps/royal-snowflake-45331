import axios from "axios"
import {
  CONNECTOR_PHONIC_API_USERNAME,
  CONNECTOR_PHONIC_API_PASSWORD
} from "react-native-dotenv"
const phonicAPI = axios.create({
  baseURL: "https://api.phonic.ai/login",
  auth: {
    username: CONNECTOR_PHONIC_API_USERNAME,
    password: CONNECTOR_PHONIC_API_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function phonicapi_get_https__apiphonicai_surveys_read(payload) {
  return phonicAPI.get(`/https://api.phonic.ai/surveys`)
}
export const apiService = { phonicapi_get_https__apiphonicai_surveys_read }
