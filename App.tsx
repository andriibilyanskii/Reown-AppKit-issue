import '@walletconnect/react-native-compat';

import {useEffect} from 'react';
import {Linking, Text} from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// import {coinbaseConnector} from '@reown/appkit-coinbase-wagmi-react-native';
import {authConnector} from '@reown/appkit-auth-wagmi-react-native';
import {createAppKit, defaultWagmiConfig, AppKit} from '@reown/appkit-wagmi-react-native';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {mainnet, polygon} from '@wagmi/core/chains';
import {WagmiProvider} from 'wagmi';
import ConnectView from "@/components/ConnectView";


const projectId = 'PROJECT_ID';

const metadata = {
    name: 'Authencity.',
    description: 'Authencity.',
    url: 'https://qwertyabc.authencity.io/',
    icons: ['https://authencity.infura-ipfs.io/ipfs/QmaR6wfdHvZS4Np7CgYyD7RGuZHeXt3vpNEWrdtDevUFtm'],
    redirect: {
        native: 'authencity://',
        universal: 'authencity.io',
    },
};

const chains = [mainnet, polygon] as const;

const _authConnector = authConnector({
    projectId,
    metadata,
});

const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    extraConnectors: [
        // _coinbaseConnector,
        _authConnector,
    ],
});

createAppKit({
    projectId,
    wagmiConfig,
    metadata,
    connectorImages: {
        coinbaseWallet:
            'https://play-lh.googleusercontent.com/wrgUujbq5kbn4Wd4tzyhQnxOXkjiGqq39N4zBvCHmxpIiKcZw_Pb065KTWWlnoejsg',
        appKitAuth: 'https://avatars.githubusercontent.com/u/179229932',
    },
    features: {
        email: true,
        socials: ['x', 'discord', 'apple'],
        emailShowWallets: true,
        swaps: true,
    },
});

export default function App() {
    const queryClient = new QueryClient();


    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider
                client={queryClient}
            >
                <Text
                    style={{
                        paddingTop: 32,
                        paddingLeft: 16,
                    }}
                >
                    App
                </Text>

                <ConnectView/>

                <AppKit/>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
