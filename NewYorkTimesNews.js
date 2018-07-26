import fetch from 'node-fetch'
const NewYorkApiKey = process.env.NewYorkApiKey

export default class NewYorkTimesNews {
  async getLatestTechnologyNews() {
    const url = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NewYorkApiKey}`
    const response = await fetch(url)
    return await response.json()
  }
}