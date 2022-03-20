import { registerRootComponent } from "expo";
import Root from "./js/Root";

export default function App() {
    return (
        <Root/>
    )
}

registerRootComponent(App);