import { call, put, takeEvery } from "redux-saga/effects";
import { client } from "./App";
import { GET_WEATHER_QUERY } from "./graphql/Queries";
import { getWeatherSuccess } from "./weatherSlice";

function* getWeatherWork(id) {
  const data = yield call(() =>
    client.query({ query: GET_WEATHER_QUERY, variables: { name: id.payload } })
  );
  yield put(getWeatherSuccess(data));
}

function* weatherSaga() {
  yield takeEvery("weather/getWeatherFetch", getWeatherWork);
}

export default weatherSaga;
