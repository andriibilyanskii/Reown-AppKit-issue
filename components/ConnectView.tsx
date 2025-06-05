import { Pressable, Text } from "react-native";
import { useAppKit } from "@reown/appkit-wagmi-react-native";

export default function ConnectView() {
    const { open } = useAppKit();

    return (
        <>
            <Pressable onPress={() => open()}>
                <Text>Open Connect Modal</Text>
            </Pressable>
        </>
    );
}