import Head from "next/head";
import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";
import SolanaIcon from "@/components/SolanaIcon";
import Image from "next/image";
import React from "react";
import CopyIcon from "@/components/CopyIcon";
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';

const inter = Inter({ subsets: ["latin"] });
const tokenName = "Dobby the dog".toUpperCase()
const tokenCA = "DnPzC8aT4dsGcRe5tHtiM7Tr7uVytEzZMNXZA3YYpump"
const tokenCode = "$Dobby"
const telegramLink = "https://t.me/+K4Yxfva791dkMWMy"
const twitterLink = "#"
const pumpFunLink = "https://pump.fun/DnPzC8aT4dsGcRe5tHtiM7Tr7uVytEzZMNXZA3YYpump"
export default function Home() {

    const [copySuccess, setCopySuccess] = React.useState("");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(tokenCA)
            .then(() => {
                setCopySuccess("Copied!");
                setTimeout(() => setCopySuccess(""), 2000);      // It'll set 'copySuccess' back to an empty string after 2 seconds
            }).catch(err => console.error('Could not copy text: ', err));
    };

    return (
    <>
      <Head>
        <title>{tokenCode.substring(1)} on Solano</title>
        <meta name="description" content={tokenName} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/token.jpeg" />
      </Head>
        <header>
            <Marquee className={"running"} autoFill={true}
                     style={{height: "50px", background: "black", color: "white", fontSize: "24px"}}>
                <SolanaIcon width={"40"}/>
                {tokenCode}
            </Marquee>
            <nav>
                <h1>
                    {tokenCode}
                </h1>
                <div className="links">
                    <a href="#buy" className="link">
                        how to buy
                    </a>
                    <a className="link" href={twitterLink} target="_blank">
                        X page
                    </a>
                    <a className="link" href={telegramLink} target="_blank">
                        telegram
                    </a>
                    <a className="link" href={pumpFunLink} target="_blank">
                        Pump fun
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <p className="intro">Hello, I'm {tokenName}, <br/> little dog on <span>Solana</span> .</p>
            <div className={"image-container"}>
                <SolanaIcon/>
                <Image src="/token.jpeg" alt={"token-image"} width={300} height={400}/>
                <SolanaIcon/>
            </div>
            <div id={"ca"} className="caBtn">
                <p>
                    CA: {tokenCA}
                </p>
                <button style={{marginLeft: "10px"}} onClick={copyToClipboard}>
                    <CopyIcon/>
                </button>
                {copySuccess && (<p>Contract Address {copySuccess}</p>)}
            </div>
            <div id="buy"  className={"buy"}>
                <p className="buy-heading">To buy $LIBO follow these simple steps :</p>
                <div className='buy-info'>
                    <div className="buy-item">
                        <span className="itemText">Step 1 : Get yourself some $SOL on the {" "}
                            <a href="https://phantom.app/"
                               target="_blank"
                               className="itemTextLink">
                                 Phantom
                            </a>
                            {" "} wallet.
                        </span>
                    </div>
                    <div className="buy-item">
                        <span className="itemText">Step 2: Visit {" "}
                            <a href="https://jup.ag/" target="_blank">Jupiter</a>
                            {" "} the best DEX, in our opinion) and connect your wallet.
                        </span>
                    </div>
                    <div className="buy-item">
                        <span className="itemText">Step 3 : Double check the {" "}
                            <a href="#ca">Contract Address</a>
                            {" "} to avoid any mistakes.
                        </span>
                    </div>
                    <div className="buy-item">
                        <span className="itemText">
                            Step 4 : Change your $SOL to {tokenCode} and fasten your seatbelts, because we're going to the moon.
                        </span>
                    </div>
                </div>
            </div>
        </main>
        <footer className="footer">
            <a href={telegramLink} target="_blank">
                <TelegramIcon style={{width: "100px"}}/>
            </a>
            <a href={twitterLink} target="_blank">
                <XIcon style={{width: "100px"}}/>
            </a>
        </footer>
    </>
    );
}
