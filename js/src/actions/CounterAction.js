import Request from "superagent";

export const PUSH_PLUS_BUTTON = "PUSH_PLUS_BUTTON";
export function pushPlusButton() {
    return {
        type: PUSH_PLUS_BUTTON
    };
};

export const PUSH_MINUS_BUTTON = "PUSH_MINUS_BUTTON";
export function pushMinusButton() {
    return {
        type: PUSH_MINUS_BUTTON
    };
};
