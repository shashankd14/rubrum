import {all, fork} from "redux-saga/effects";
import authSagas from "./Auth";
import notesSagas from "./Notes";
import inwardSagas from "./Inward";
import partySagas from "./Party";
import materialSagas from "./Material";
import deliverySagas from "./Delivery";
import packetClassification from "./PacketClassification";
import ratesSagas from './Rates';
import processSagas from './Process';

export default function* rootSaga(getState) {
  yield all([fork(authSagas)]);
  yield all([fork(notesSagas)]);
  yield all([fork(inwardSagas)]);
  yield all([fork(partySagas)]);
  yield all([fork(materialSagas)]);
  yield all([fork(deliverySagas)]);
  yield all([fork(packetClassification)]);
  yield all([fork(ratesSagas)]);
  yield all([fork(processSagas)]);
}
