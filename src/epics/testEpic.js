import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { TEST_TYPE } from "../actions/actionTypes";
import { combineEpics } from "redux-observable";
import { testActionSuccess } from "../actions/actions";

export const testEpic = action$ =>
    action$.pipe(
        ofType(TEST_TYPE),
        mergeMap(action => of(testActionSuccess({ test: 123 })))
    );
export default combineEpics(testEpic);
