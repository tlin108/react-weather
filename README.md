### How to run app
```sh
1. git clone this repo
2. cd into repo directory
3. npm install or yarn install
4. npm start or yarn start
5. open [http://localhost:3000/](http://localhost:3000/) to see app
```
### How to build app
`npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### How to test app
 `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

## Thought Process

* **Theme:** The first thing I decided to work on was the theme. I wanted to find a weather template that looks decent and integrate it into the app.

* **Break Into Components:** After hooking up image files and clean unnecessary template session away. I break the remaining template sessions into 3 parts. Header, SearchBar, and ForecastTable. Did some refactor to make component more cleaner and reusable. 

* **OpenWeather Api:** I then work on API call to get the weather data I need. I look up open weather api doc to see what kind of data I can get. I start working on making static fetch call to open weather api and pass the data to rest of the component for rendering.

* **Refactor ForecastTable:** Now that I get some example data to work with. I work on my forecast table to make sure I'm displaying the icon and weather info correctly. Also added momentjs to parse date.

* **Search by city functionality:** I then work on the ability to fetch new weather based on user city input. Making sure that I make a fetch call every time the city name has been changed by using some logic inside react lifecycle method componentDidUpdate.

* **Testing:** I then focus on testing of all component. Took a while to understand Jest and Enzyme and definitely had trouble setting up fake server using Sinon.

* **Minor edge cases handling:** Realized some edge cases so I went back and added some functionality to prevent them.

## Trade Off

**Framework:**
`create react app vs other framework starter kit`
Have been developing with react lately so I'm familiar with create react app. It provides almost everything you need right out of the box that includes linting, hot reloading, and etc. I didn't want to add on Redux on top of react because it would increase complexity as well time spent on configuration.  

**Theme:**
`Old Template I worked with vs new template out there`
I wanted to spend as little time as possible on design and configuration so I went with my old template which I'm okay familiar with.

**Testing:**
`Jest & Enzyme for testing vs other testing framework`
Create react app provides Jest as testing framework right out of the box, with a little addon I can get enzyme with not much trouble. Didn't want to spend time on configuring test framework so I just go along with those two and later add on Sinon for fake server. Looked at nock and found it interesting but couldnt get that to work.

## WishList?

**Features:**
* Allows user to click on any day to see a detailed version of forecast like today weather's
* Allows user to see forecast by hours when click on date.

**Fixes**
* In testing, find way to get setState working inside of fetch method.

**Tech Debt:**
* Too many testing frameworks, a lot of them has similiar functionalities so if possible find ways to do fakeServer with only Jest&Enzyme or get Nock to work since its much smaller than Sinon.
* A lot of unnessary styling or css/lib in the app. Remove them altogether could save spaces and improve performance.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
