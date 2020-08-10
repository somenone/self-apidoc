
import axios from "axios"

const http = axios.create({
  timeout: 10000
})


let request = (option) => {
  http({
    method: option.method,
    url: option.url,
    data: option.data,
    header: option.header,
  })
}

export default request
