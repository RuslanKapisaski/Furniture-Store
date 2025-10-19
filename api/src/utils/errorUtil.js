export default function getErrorMessage(err) {
  switch (err.name) {
    case "ValidationError":
      const firstMessage = Object.values(err.errors.at(0).message);
      return firstMessage;
    default:
      return err.message;
  }
}
