import { render } from "@testing-library/react-native";
import { Home } from ".";

describe("<HomeScreen />", () => {
  test("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<Home />);
  });
});
