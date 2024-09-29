# Eqisense

### Tech Stack
React, FastAPI, OpenAI's API, Selenium

## Inspiration
We wanted to create an app that removes the barriers from making good, sensible financial decisions in regards to investing in single equities. Eqisense serves as a solution into making this research accessible by simplifying the user experience by researching company financials and understanding their risks removing the bloat from traditional financial websites to come to a conclusion whether to buy, hold, or sell a particular stock. We also wanted the app to allow the user to share their findings to other people with ease.

## What it does
Eqisense provides equity research in a concise and digestible format. It allows the user to input in a stock ticker and view relevant key stock statistics, analyst recommendations, up-to-date scrapped from reliable financial sources, and an in-the-week risk analysis section based on a sentiment analysis fed from ChatGPT.

## How we built it
Our frontend is built with React, broken into two routes, one being the main page and the other the analysis page. The main page gets the user's company ticker that they’d like to view, and this ticker is sent to the backend to begin scraping the data and generating what is needed. They are routed into the analysis page when the information comes back. The backend takes the given company ticker and scrapes relevant sites (CNN, Yahoo Finance, etc) and coalesces the data into an object to send back to the frontend. The frontend then parses this data into the relevant component, thus completing the frontend site.

## Challenges we ran into
Picking out the metrics which best describe a company is a difficult task since you don’t want to leave out a metric which might be crucial in determining whether you’d invest in the company or not. So, a lot of research, metric collection, and eventual deletion to narrow down the best ones to show had to take place. We seemed to come out the other end with a great application! However, behind the scenes, there were countless server errors, data handling issues, inconsistent scraping regex functions, and more. Thankfully, we got through them nonetheless!

## Accomplishments that we're proud of
We are proud of the condensed, yet informative format that the app ended up with. Also, we are proud of all we’ve learned through the process of making this application. We both have strengths in certain full-stack fields, so helping one another out as we proceeded through the development of the project was instrumental in making it to the finish line!

## What we learned
Much of this answer is shown above, but more specifically, one of us gained a lot of experience with CSS, styling techniques, componentization, and React, while the other gained knowledge of server layouts, backend routing, and RESTful requests.

## What's next for Eqisense
Expanding the scope of our searches to include bonds and mutual funds to enable people to choose whether to invest from a top-down or a bottom-up perspective.


