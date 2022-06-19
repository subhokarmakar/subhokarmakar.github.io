import { Subject } from "rxjs"

const subject = new Subject()

export const MessageService = {
  authDataToXData: (token, userData, status) =>
    subject.next({
      eventType: "AUTH_TO_XDATA",
      token: token,
      userData: userData,
      status: status,
    }),
  initializeEvent: () => subject.asObservable(),
}
