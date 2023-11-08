import React, { useState, useEffect } from "react";
import Web3 from "web3";
import PaymentContractABI from "./PaymentContractABI.json"; 
import styled from "styled-components";

const App = ({amount}) => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [transactionStatus, setTransactionStatus] = useState("");
    const [accounts, setAccounts] = useState([]);

    

    useEffect(() => {
        // Connect to MetaMask and initialize Web3
        async function initWeb3() {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                await window.ethereum.enable();
                setWeb3(web3Instance);
    
                const networkId = 80001; // Mumbai testnet network ID
                const deployedNetwork = PaymentContractABI.networks[networkId];
    
                if (deployedNetwork) {
                    const contractInstance = new web3Instance.eth.Contract(
                        PaymentContractABI.abi,
                        deployedNetwork.address
                    );
                    setContract(contractInstance);
                    
                    
                } else {
                    console.error("Contract not deployed on the Mumbai testnet");
                }
    
                // Get Ethereum accounts
                const accounts = await web3Instance.eth.getAccounts();
                setAccounts(accounts);
            } else {
                alert("Please install MetaMask to use this app");
            }
        }
        initWeb3();
    }, []);

    

    const handleSetBalance = async () => {
        try {
            await contract.methods.setBalance(amount).send({ from: accounts[0] });
            console.log("Balance set successfully");
        } catch (error) {
            console.error("Error setting balance:", error);
        }
    };

    const handlePay = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        try {
            await contract.methods.payBalance().send({
                from: accounts[0],
                value: web3.utils.toWei(amount.toString(), "ether"),
            });
            setTransactionStatus("Transaction Successful");
        } catch (error) {
            setTransactionStatus("Transaction Failed");
            console.error("Transaction error:", error);
        }
    };

    return (
        <Container>
                
                <button onClick={handlePay}>Metamask Payment</button>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 81%;
        border-radius: 5px;
        background: #353738;
        border: none;
        outline: none;
        color: #fff;
        height: 46px;
        font-size: 18px;
        letter-spacing: 1.3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

        &:hover{
            cursor: pointer;
        }
    }


`

export default App;