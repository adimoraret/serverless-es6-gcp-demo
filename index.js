import NewYorkTimesNews from './NewYorkTimesNews'

export async function newYorkTimesNews(request, response) {
  const newYorkTimesNews = new NewYorkTimesNews()
  const news = await newYorkTimesNews.getLatestTechnologyNews()
  response.status(200).send(news)
}