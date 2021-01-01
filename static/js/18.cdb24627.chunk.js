(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [18, 9, 11, 37], {
        748: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"_myid","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"}],"name":"__callback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_queryId","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"},{"internalType":"bytes","name":"_proof","type":"bytes"}],"name":"__callback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"__timeout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"$getMyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wiseToken","type":"address"},{"internalType":"address","name":"_uniswapPair","type":"address"}],"name":"defineToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"forwardLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_investmentDay","type":"uint64"}],"name":"generateSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wiseToken","type":"address"},{"internalType":"address","name":"_uniswapPair","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"investmentDay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"randomSupply","type":"uint256"}],"name":"GeneratedRandomSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"investmentDay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"staticSupply","type":"uint256"}],"name":"GeneratedStaticSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"investmentDay","type":"uint256"}],"name":"GeneratingRandomSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"investmentDay","type":"uint64"},{"indexed":false,"internalType":"bool","name":"result","type":"bool"}],"name":"GenerationStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"LogNewProvableQuery","type":"event"},{"inputs":[{"internalType":"uint256","name":"_investmentDay","type":"uint256"},{"internalType":"uint256","name":"_investorBatchFrom","type":"uint256"},{"internalType":"uint256","name":"_investorBatchTo","type":"uint256"}],"name":"payoutInvestmentDayBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_investorAddress","type":"address"}],"name":"payoutInvestorAddress","outputs":[{"internalType":"uint256","name":"_payout","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referralAddress","type":"address"}],"name":"payoutReferralAddress","outputs":[{"internalType":"uint256","name":"_referralTokens","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referralBatchFrom","type":"uint256"},{"internalType":"uint256","name":"_referralBatchTo","type":"uint256"}],"name":"payoutReferralBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referralBatchFrom","type":"uint256"},{"internalType":"uint256","name":"_referralBatchTo","type":"uint256"}],"name":"prepareReferralBonuses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"address","name":"referee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralAdded","type":"event"},{"inputs":[{"internalType":"address payable","name":"_investor","type":"address"},{"internalType":"address payable","name":"_succesor","type":"address"}],"name":"requestRefund","outputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"requestTeamFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"_investmentDays","type":"uint8[]"},{"internalType":"address","name":"_referralAddress","type":"address"}],"name":"reserveWise","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"},{"internalType":"uint8[]","name":"_investmentDays","type":"uint8[]"},{"internalType":"address","name":"_referralAddress","type":"address"}],"name":"reserveWiseWithToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountETH","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"UniSwapResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"investmentDay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WiseReservation","type":"event"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"_currentWiseDay","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dailyTotalInvestment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dailyTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundedDays","outputs":[{"internalType":"uint8","name":"$fundedDays","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"g","outputs":[{"internalType":"uint64","name":"generatedDays","type":"uint64"},{"internalType":"uint64","name":"generationDayBuffer","type":"uint64"},{"internalType":"uint64","name":"generationTimeout","type":"uint64"},{"internalType":"uint64","name":"preparedReferrals","type":"uint64"},{"internalType":"uint256","name":"totalTransferTokens","type":"uint256"},{"internalType":"uint256","name":"totalWeiContributed","type":"uint256"},{"internalType":"uint256","name":"totalReferralTokens","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investmentsOnAllDays","outputs":[{"internalType":"uint256[51]","name":"_allInvestments","type":"uint256[51]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"investorAccountCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"investorAccounts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"investorBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investorsOnAllDays","outputs":[{"internalType":"uint256[51]","name":"_allInvestors","type":"uint256[51]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_investmentDay","type":"uint256"}],"name":"investorsOnDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorTotalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_investmentDay","type":"uint256"}],"name":"myInvestmentAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"myInvestmentAmountAllDays","outputs":[{"internalType":"uint256[51]","name":"_myAllDays","type":"uint256[51]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"myTotalInvestmentAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralAccountCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralAccounts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFUND_SPONSOR","outputs":[{"internalType":"contract RefundSponsorI","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"supplyOnAllDays","outputs":[{"internalType":"uint256[51]","name":"_allSupply","type":"uint256[51]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_DEFINER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniqueInvestorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uniqueInvestors","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_PAIR","outputs":[{"internalType":"contract UniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNISWAP_ROUTER","outputs":[{"internalType":"contract UniswapRouterV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WISE_CONTRACT","outputs":[{"internalType":"contract IWiseToken","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')
        },
        750: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var n = [];
            n[0] = {}, n[1] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "11.11.2020",
                day: "01",
                dateString: "November 11, 2020",
                dateUTC: Date.UTC(2020, 10, 11),
                endUTC: Date.UTC(2020, 10, 9),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[2] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "12.11.2020",
                day: "02",
                dateString: "November 12, 2020",
                dateUTC: Date.UTC(2020, 10, 12),
                endUTC: Date.UTC(2020, 10, 13),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[3] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "13.11.2020",
                day: "03",
                dateString: "November 13, 2020",
                dateUTC: Date.UTC(2020, 10, 13),
                endUTC: Date.UTC(2020, 10, 14),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[4] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "14.11.2020",
                day: "04",
                dateString: "November 14, 2020",
                dateUTC: Date.UTC(2020, 10, 14),
                endUTC: Date.UTC(2020, 10, 15),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[5] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "15.11.2020",
                day: "05",
                dateString: "November 15, 2020",
                dateUTC: Date.UTC(2020, 10, 15),
                endUTC: Date.UTC(2020, 10, 16),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[6] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "16.11.2020",
                day: "06",
                dateString: "November 16, 2020",
                dateUTC: Date.UTC(2020, 10, 16),
                endUTC: Date.UTC(2020, 10, 17),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[7] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "17.11.2020",
                day: "07",
                dateString: "November 17, 2020",
                dateUTC: Date.UTC(2020, 10, 17),
                endUTC: Date.UTC(2020, 10, 18),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[8] = {
                minRaw: 45e5,
                maxRaw: 55e5,
                supply: "4,500,000 \u2013 5,500,000 WISE",
                class: "warning",
                date: "18.11.2020",
                day: "08",
                dateString: "November 18, 2020",
                dateUTC: Date.UTC(2020, 10, 18),
                endUTC: Date.UTC(2020, 10, 19),
                min: "4,500,000 WISE",
                max: "5,500,000 WISE"
            }, n[9] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "19.11.2020",
                day: "09",
                dateString: "November 19, 2020",
                dateUTC: Date.UTC(2020, 10, 19),
                endUTC: Date.UTC(2020, 10, 20),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[10] = {
                minRaw: 45e5,
                maxRaw: 55e5,
                supply: "4,500,000 \u2013 5,500,000 WISE",
                class: "warning",
                date: "20.11.2020",
                day: "10",
                dateString: "November 20, 2020",
                dateUTC: Date.UTC(2020, 10, 20),
                endUTC: Date.UTC(2020, 10, 21),
                min: "4,500,000 WISE",
                max: "5,500,000 WISE"
            }, n[11] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "21.11.2020",
                day: "11",
                dateString: "November 21, 2020",
                dateUTC: Date.UTC(2020, 10, 21),
                endUTC: Date.UTC(2020, 10, 22),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[12] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "22.11.2020",
                day: "12",
                dateString: "November 22, 2020",
                dateUTC: Date.UTC(2020, 10, 22),
                endUTC: Date.UTC(2020, 10, 23),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[13] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "23.11.2020",
                day: "13",
                dateString: "November 23, 2020",
                dateUTC: Date.UTC(2020, 10, 23),
                endUTC: Date.UTC(2020, 10, 24),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[14] = {
                minRaw: 4e6,
                maxRaw: 6e6,
                supply: "4,000,000 \u2013 6,000,000 WISE",
                class: "warning",
                date: "24.11.2020",
                day: "14",
                dateString: "November 24, 2020",
                dateUTC: Date.UTC(2020, 10, 24),
                endUTC: Date.UTC(2020, 10, 25),
                min: "4,000,000 WISE",
                max: "6,000,000 WISE"
            }, n[15] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "25.11.2020",
                day: "15",
                dateString: "November 25, 2020",
                dateUTC: Date.UTC(2020, 10, 25),
                endUTC: Date.UTC(2020, 10, 26),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[16] = {
                minRaw: 4e6,
                maxRaw: 6e6,
                supply: "4,000,000 \u2013 6,000,000 WISE",
                class: "warning",
                date: "26.11.2020",
                day: "16",
                dateString: "November 26, 2020",
                dateUTC: Date.UTC(2020, 10, 26),
                endUTC: Date.UTC(2020, 10, 27),
                min: "4,000,000 WISE",
                max: "6,000,000 WISE"
            }, n[17] = {
                minRaw: 4e6,
                maxRaw: 6e6,
                supply: "4,000,000 \u2013 6,000,000 WISE",
                class: "warning",
                date: "27.11.2020",
                day: "17",
                dateString: "November 27, 2020",
                dateUTC: Date.UTC(2020, 10, 27),
                endUTC: Date.UTC(2020, 10, 28),
                min: "4,000,000 WISE",
                max: "6,000,000 WISE"
            }, n[18] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "28.11.2020",
                day: "18",
                dateString: "November 28, 2020",
                dateUTC: Date.UTC(2020, 10, 28),
                endUTC: Date.UTC(2020, 10, 29),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[19] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "29.11.2020",
                day: "19",
                dateString: "November 29, 2020",
                dateUTC: Date.UTC(2020, 10, 29),
                endUTC: Date.UTC(2020, 10, 30),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[20] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "30.11.2020",
                day: "20",
                dateString: "November 30, 2020",
                dateUTC: Date.UTC(2020, 10, 30),
                endUTC: Date.UTC(2020, 11, 1),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[21] = {
                minRaw: 35e5,
                maxRaw: 65e5,
                supply: "3,500,000 \u2013 6,500,000 WISE",
                class: "warning",
                date: "01.12.2020",
                day: "21",
                dateString: "December 1, 2020",
                dateUTC: Date.UTC(2020, 11, 1),
                endUTC: Date.UTC(2020, 11, 2),
                min: "3,500,000 WISE",
                max: "6,500,000 WISE"
            }, n[22] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "02.12.2020",
                day: "22",
                dateString: "December 2, 2020",
                dateUTC: Date.UTC(2020, 11, 2),
                endUTC: Date.UTC(2020, 11, 3),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[23] = {
                minRaw: 35e5,
                maxRaw: 65e5,
                supply: "3,500,000 \u2013 6,500,000 WISE",
                class: "warning",
                date: "03.12.2020",
                day: "23",
                dateString: "December 3, 2020",
                dateUTC: Date.UTC(2020, 11, 3),
                endUTC: Date.UTC(2020, 11, 4),
                min: "3,500,000 WISE",
                max: "6,500,000 WISE"
            }, n[24] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "04.12.2020",
                day: "24",
                dateString: "December 4, 2020",
                dateUTC: Date.UTC(2020, 11, 4),
                endUTC: Date.UTC(2020, 11, 5),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[25] = {
                minRaw: 35e5,
                maxRaw: 65e5,
                supply: "3,500,000 \u2013 6,500,000 WISE",
                class: "warning",
                date: "05.12.2020",
                day: "25",
                dateString: "December 5, 2020",
                dateUTC: Date.UTC(2020, 11, 5),
                endUTC: Date.UTC(2020, 11, 6),
                min: "3,500,000 WISE",
                max: "6,500,000 WISE"
            }, n[26] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "06.12.2020",
                day: "26",
                dateString: "December 6, 2020",
                dateUTC: Date.UTC(2020, 11, 6),
                endUTC: Date.UTC(2020, 11, 7),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[27] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "07.12.2020",
                day: "27",
                dateString: "December 7, 2020",
                dateUTC: Date.UTC(2020, 11, 7),
                endUTC: Date.UTC(2020, 11, 8),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[28] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "08.12.2020",
                day: "28",
                dateString: "December 8, 2020",
                dateUTC: Date.UTC(2020, 11, 8),
                endUTC: Date.UTC(2020, 11, 9),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[29] = {
                minRaw: 3e6,
                maxRaw: 7e6,
                supply: "3,000,000 \u2013 7,000,000 WISE",
                class: "warning",
                date: "09.12.2020",
                day: "29",
                dateString: "December 9, 2020",
                dateUTC: Date.UTC(2020, 11, 9),
                endUTC: Date.UTC(2020, 11, 10),
                min: "3,000,000 WISE",
                max: "7,000,000 WISE"
            }, n[30] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "10.12.2020",
                day: "30",
                dateString: "December 10, 2020",
                dateUTC: Date.UTC(2020, 11, 10),
                endUTC: Date.UTC(2020, 11, 11),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[31] = {
                minRaw: 3e6,
                maxRaw: 7e6,
                supply: "3,000,000 \u2013 7,000,000 WISE",
                class: "warning",
                date: "11.12.2020",
                day: "31",
                dateString: "December 11, 2020",
                dateUTC: Date.UTC(2020, 11, 11),
                endUTC: Date.UTC(2020, 11, 12),
                min: "3,000,000 WISE",
                max: "7,000,000 WISE"
            }, n[32] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "12.12.2020",
                day: "32",
                dateString: "December 12, 2020",
                dateUTC: Date.UTC(2020, 11, 12),
                endUTC: Date.UTC(2020, 11, 13),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[33] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "13.12.2020",
                day: "33",
                dateString: "December 13, 2020",
                dateUTC: Date.UTC(2020, 11, 13),
                endUTC: Date.UTC(2020, 11, 14),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[34] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "14.12.2020",
                day: "34",
                dateString: "December 14, 2020",
                dateUTC: Date.UTC(2020, 11, 14),
                endUTC: Date.UTC(2020, 11, 15),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[35] = {
                minRaw: 25e5,
                maxRaw: 75e5,
                supply: "2,500,000 \u2013 7,500,000 WISE",
                class: "warning",
                date: "15.12.2020",
                day: "35",
                dateString: "December 15, 2020",
                dateUTC: Date.UTC(2020, 11, 15),
                endUTC: Date.UTC(2020, 11, 16),
                min: "2,5000,00 WISE",
                max: "7,500,000 WISE"
            }, n[36] = {
                minRaw: 25e5,
                maxRaw: 75e5,
                supply: "2,500,000 \u2013 7,500,000 WISE",
                class: "warning",
                date: "16.12.2020",
                day: "36",
                dateString: "December 16, 2020",
                dateUTC: Date.UTC(2020, 11, 16),
                endUTC: Date.UTC(2020, 11, 17),
                min: "2,500,000 WISE",
                max: "7,500,000 WISE"
            }, n[37] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "17.12.2020",
                day: "37",
                dateString: "December 17, 2020",
                dateUTC: Date.UTC(2020, 11, 17),
                endUTC: Date.UTC(2020, 11, 18),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[38] = {
                minRaw: 25e5,
                maxRaw: 75e5,
                supply: "2,500,000 \u2013 7,500,000 WISE",
                class: "warning",
                date: "18.12.2020",
                day: "38",
                dateString: "December 18, 2020",
                dateUTC: Date.UTC(2020, 11, 18),
                endUTC: Date.UTC(2020, 11, 19),
                min: "2,500,000 WISE",
                max: "7,500,000 WISE"
            }, n[39] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "19.12.2020",
                day: "39",
                dateString: "December 19, 2020",
                dateUTC: Date.UTC(2020, 11, 19),
                endUTC: Date.UTC(2020, 11, 20),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[40] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "20.12.2020",
                day: "40",
                dateString: "December 20, 2020",
                dateUTC: Date.UTC(2020, 11, 20),
                endUTC: Date.UTC(2020, 11, 21),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[41] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "21.12.2020",
                day: "41",
                dateString: "December 21, 2020",
                dateUTC: Date.UTC(2020, 11, 21),
                endUTC: Date.UTC(2020, 11, 22),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[42] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "22.12.2020",
                day: "42",
                dateString: "December 22, 2020",
                dateUTC: Date.UTC(2020, 11, 22),
                endUTC: Date.UTC(2020, 11, 23),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[43] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "23.12.2020",
                day: "43",
                dateString: "December 23, 2020",
                dateUTC: Date.UTC(2020, 11, 23),
                endUTC: Date.UTC(2020, 11, 24),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[44] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "24.12.2020",
                day: "44",
                dateString: "December 24, 2020",
                dateUTC: Date.UTC(2020, 11, 24),
                endUTC: Date.UTC(2020, 11, 25),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[45] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "25.12.2020",
                day: "45",
                dateString: "December 25, 2020",
                dateUTC: Date.UTC(2020, 11, 25),
                endUTC: Date.UTC(2020, 11, 26),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[46] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "26.12.2020",
                day: "46",
                dateString: "December 26, 2020",
                dateUTC: Date.UTC(2020, 11, 26),
                endUTC: Date.UTC(2020, 11, 27),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[47] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "27.12.2020",
                day: "47",
                dateString: "December 27, 2020",
                dateUTC: Date.UTC(2020, 11, 27),
                endUTC: Date.UTC(2020, 11, 28),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[48] = {
                minRaw: 1,
                maxRaw: 9999999,
                supply: "1 \u2013 9,999,999 WISE",
                class: "danger",
                date: "28.12.2020",
                day: "48",
                dateString: "December 28, 2020",
                dateUTC: Date.UTC(2020, 11, 28),
                endUTC: Date.UTC(2020, 11, 29),
                min: "1 WISE",
                max: "9,999,999 WISE"
            }, n[49] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "29.12.2020",
                day: "49",
                dateString: "December 29, 2020",
                dateUTC: Date.UTC(2020, 11, 29),
                endUTC: Date.UTC(2020, 11, 30),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }, n[50] = {
                minRaw: 5e6,
                maxRaw: 5e6,
                supply: "5,000,000 WISE",
                class: "success",
                date: "30.12.2020",
                day: "50",
                dateString: "December 30, 2020",
                dateUTC: Date.UTC(2020, 11, 30),
                endUTC: Date.UTC(2020, 11, 31),
                min: "5,000,000 WISE",
                max: "5,000,000 WISE"
            }
        },
        752: function(e, t, a) {
            "use strict";
            a.d(t, "d", (function() {
                return r
            })), a.d(t, "c", (function() {
                return s
            })), a.d(t, "a", (function() {
                return i
            })), a.d(t, "b", (function() {
                return l
            }));
            var n = a(146);

            function r() {
                return function(e) {
                    e({
                        type: n.d
                    }), setTimeout((function() {
                        e(s())
                    }), 15e3)
                }
            }

            function s() {
                return {
                    type: n.c
                }
            }

            function i() {
                return {
                    type: n.a
                }
            }

            function l(e) {
                return {
                    type: n.b,
                    payload: {
                        lang: e
                    }
                }
            }
        },
        753: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/background.7c7656ee.jpg"
        },
        758: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return s
            }));
            var n = a(0),
                r = n.createContext();

            function s() {
                return n.useContext(r)
            }
            t.a = r
        },
        760: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return s
            }));
            var n = a(0),
                r = a(758);

            function s() {
                return n.useContext(r.a)
            }
        },
        763: function(e, t, a) {
            "use strict";
            var n = a(1),
                r = a(13),
                s = a(36),
                i = a(0),
                l = (a(10), a(9)),
                o = a(23),
                c = a(34),
                d = i.forwardRef((function(e, t) {
                    var a = e.classes,
                        s = e.className,
                        o = e.component,
                        d = void 0 === o ? "div" : o,
                        u = e.disableGutters,
                        p = void 0 !== u && u,
                        m = e.fixed,
                        f = void 0 !== m && m,
                        b = e.maxWidth,
                        h = void 0 === b ? "lg" : b,
                        g = Object(r.a)(e, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);
                    return i.createElement(d, Object(n.a)({
                        className: Object(l.a)(a.root, s, f && a.fixed, p && a.disableGutters, !1 !== h && a["maxWidth".concat(Object(c.a)(String(h)))]),
                        ref: t
                    }, g))
                }));
            t.a = Object(o.a)((function(e) {
                return {
                    root: Object(s.a)({
                        width: "100%",
                        marginLeft: "auto",
                        boxSizing: "border-box",
                        marginRight: "auto",
                        paddingLeft: e.spacing(2),
                        paddingRight: e.spacing(2),
                        display: "block"
                    }, e.breakpoints.up("sm"), {
                        paddingLeft: e.spacing(3),
                        paddingRight: e.spacing(3)
                    }),
                    disableGutters: {
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    fixed: Object.keys(e.breakpoints.values).reduce((function(t, a) {
                        var n = e.breakpoints.values[a];
                        return 0 !== n && (t[e.breakpoints.up(a)] = {
                            maxWidth: n
                        }), t
                    }), {}),
                    maxWidthXs: Object(s.a)({}, e.breakpoints.up("xs"), {
                        maxWidth: Math.max(e.breakpoints.values.xs, 444)
                    }),
                    maxWidthSm: Object(s.a)({}, e.breakpoints.up("sm"), {
                        maxWidth: e.breakpoints.values.sm
                    }),
                    maxWidthMd: Object(s.a)({}, e.breakpoints.up("md"), {
                        maxWidth: e.breakpoints.values.md
                    }),
                    maxWidthLg: Object(s.a)({}, e.breakpoints.up("lg"), {
                        maxWidth: e.breakpoints.values.lg
                    }),
                    maxWidthXl: Object(s.a)({}, e.breakpoints.up("xl"), {
                        maxWidth: e.breakpoints.values.xl
                    })
                }
            }), {
                name: "MuiContainer"
            })(d)
        },
        764: function(e, t, a) {
            "use strict";
            var n = a(13),
                r = a(36),
                s = a(1),
                i = a(0),
                l = (a(10), a(9)),
                o = a(23),
                c = a(730),
                d = i.forwardRef((function(e, t) {
                    var a, r = e.classes,
                        o = e.className,
                        d = e.component,
                        u = void 0 === d ? "li" : d,
                        p = e.disableGutters,
                        m = void 0 !== p && p,
                        f = e.ListItemClasses,
                        b = e.role,
                        h = void 0 === b ? "menuitem" : b,
                        g = e.selected,
                        y = e.tabIndex,
                        v = Object(n.a)(e, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);
                    return e.disabled || (a = void 0 !== y ? y : -1), i.createElement(c.a, Object(s.a)({
                        button: !0,
                        role: h,
                        tabIndex: a,
                        component: u,
                        selected: g,
                        disableGutters: m,
                        classes: Object(s.a)({
                            dense: r.dense
                        }, f),
                        className: Object(l.a)(r.root, o, g && r.selected, !m && r.gutters),
                        ref: t
                    }, v))
                }));
            t.a = Object(o.a)((function(e) {
                return {
                    root: Object(s.a)(Object(s.a)({}, e.typography.body1), {}, Object(r.a)({
                        minHeight: 48,
                        paddingTop: 6,
                        paddingBottom: 6,
                        boxSizing: "border-box",
                        width: "auto",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    }, e.breakpoints.up("sm"), {
                        minHeight: "auto"
                    })),
                    gutters: {},
                    selected: {},
                    dense: Object(s.a)(Object(s.a)({}, e.typography.body2), {}, {
                        minHeight: "auto"
                    })
                }
            }), {
                name: "MuiMenuItem"
            })(d)
        },
        765: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return D
            }));
            var n = a(0),
                r = a.n(n),
                s = a(18),
                i = a(763),
                l = a(733),
                o = a(726),
                c = a(728),
                d = a(730),
                u = a(26),
                p = a(241),
                m = a.n(p),
                f = a(239),
                b = a.n(f),
                h = a(345),
                g = {
                    id: "app.labels.decentralizedFinance",
                    defaultMessage: "Decentralized Finance"
                },
                y = {
                    id: "app.labels.wiseFoundation",
                    defaultMessage: "Wise Foundation"
                },
                v = {
                    id: "app.labels.providingGlobal",
                    defaultMessage: "Providing a global and open alternative to the financial system you use today."
                },
                E = {
                    id: "app.labels.reserveWise",
                    defaultMessage: "Reserve WISE"
                },
                w = {
                    id: "app.labels.technologyUsed",
                    defaultMessage: "Technology Used"
                },
                x = {
                    id: "app.labels.provableOracle",
                    defaultMessage: "Provable Oracle"
                },
                S = {
                    id: "app.labels.uniswapProtocol",
                    defaultMessage: "Uniswap Protocol"
                },
                N = {
                    id: "app.labels.liquidityTransformer",
                    defaultMessage: "Liquidity Transformer"
                },
                T = {
                    id: "app.labels.supportTeam",
                    defaultMessage: "Support Team"
                },
                k = {
                    id: "app.labels.reportAnIssue",
                    defaultMessage: "Report an Issue"
                },
                O = {
                    id: "app.labels.requestFeature",
                    defaultMessage: "Request a New Feature"
                },
                C = {
                    id: "app.labels.gitter",
                    defaultMessage: "Gitter"
                },
                M = {
                    id: "app.labels.emailUs",
                    defaultMessage: "Email Us"
                },
                I = {
                    id: "app.labels.usefulLinks",
                    defaultMessage: "Useful Links"
                },
                j = {
                    id: "app.labels.whitePaper",
                    defaultMessage: "White Paper"
                },
                W = {
                    id: "app.labels.contractAudit",
                    defaultMessage: "Contract Audit"
                },
                R = {
                    id: "app.labels.marketingImages",
                    defaultMessage: "Marketing Images"
                },
                A = {
                    id: "app.labels.merchandise",
                    defaultMessage: "Merchandise"
                };

            function D() {
                var e = Object(h.a)().formatMessage;
                return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "bg-second py-5"
                }, r.a.createElement(i.a, {
                    className: "py-0 text-center text-xl-left py-xl-5"
                }, r.a.createElement(l.a, {
                    container: !0,
                    spacing: 6
                }, r.a.createElement(l.a, {
                    item: !0,
                    xl: 5,
                    className: "d-flex align-items-center"
                }, r.a.createElement("div", {
                    className: "mb-5 mb-xl-0 w-100"
                }, r.a.createElement("div", {
                    className: "app-nav-logo justify-content-center text-left justify-content-xl-left flex-column flex-xl-row"
                }, r.a.createElement(u.b, {
                    to: "/",
                    className: "app-nav-logo app-nav-logo--light hover-scale-sm"
                }, r.a.createElement("div", {
                    className: "app-nav-logo--icon border-0"
                }, r.a.createElement(m.a, {
                    className: "wise-logo",
                    src: b.a
                }, r.a.createElement("img", {
                    src: b.a,
                    alt: "Wise Foundation"
                }))), r.a.createElement("div", {
                    className: "app-nav-logo--text"
                }, r.a.createElement("span", null, e(g)), r.a.createElement("b", null, e(y))))), r.a.createElement("p", {
                    className: "my-4 text-white-50"
                }, e(v)), r.a.createElement("div", null, r.a.createElement(u.b, {
                    to: "/reservations"
                }, r.a.createElement(o.a, {
                    className: "btn-primary mr-3 hover-scale-sm"
                }, e(E)))))), r.a.createElement(l.a, {
                    item: !0,
                    xl: 7,
                    className: "d-none d-md-flex align-items-center"
                }, r.a.createElement(l.a, {
                    container: !0,
                    spacing: 6,
                    className: "w-100"
                }, r.a.createElement(l.a, {
                    item: !0,
                    md: 4
                }, r.a.createElement("div", {
                    className: "divider-v divider-v-lg opacity-1 d-none d-xl-block"
                }), r.a.createElement("div", {
                    className: "pl-0"
                }, r.a.createElement("h6", {
                    className: "text-white font-weight-bold mb-3"
                }, e(w)), r.a.createElement(c.a, {
                    component: "div",
                    className: "nav-transparent-alt flex-column"
                }, r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "https://provable.xyz/",
                    className: "d-block d-xl-flex px-0 py-1 text-center text-xl-left"
                }, e(x)), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "https://uniswap.org/",
                    className: "d-block d-xl-flex px-0 py-1 text-center text-xl-left"
                }, e(S)), r.a.createElement(u.b, {
                    to: "/docs#sec-2-2"
                }, r.a.createElement(d.a, {
                    className: "d-block d-xl-flex px-0 py-1 text-center text-xl-left"
                }, e(N)))))), r.a.createElement(l.a, {
                    item: !0,
                    md: 4
                }, r.a.createElement("div", {
                    className: "divider-v divider-v-lg opacity-1 d-none d-xl-block"
                }), r.a.createElement("div", {
                    className: "pl-0"
                }, r.a.createElement("h6", {
                    className: "text-white font-weight-bold mb-3"
                }, e(T)), r.a.createElement(c.a, {
                    component: "div",
                    className: "nav-transparent-alt flex-column"
                }, r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "https://github.com/wise-foundation/wise-website-requests/issues/new?assignees=coffee-converter&labels=bug&template=bug_report.md&title=%5BBUG%5D+%2A%2AType+a+descriptive+title+here%2A%2A",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(k)), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "https://github.com/wise-foundation/wise-website-requests/issues/new?assignees=coffee-converter&labels=enhancement&template=feature_request.md&title=%5BFEATURE%5D+%2A%2AType+a+descriptive+title+here%2A%2A",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(O)), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "https://gitter.im/WiseToken/community",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(C)), r.a.createElement(d.a, {
                    component: "a",
                    rel: "noopener",
                    href: "mailto:WiseTokenOfficial@gmail.com",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(M))))), r.a.createElement(l.a, {
                    item: !0,
                    md: 4
                }, r.a.createElement("div", {
                    className: "pl-0 pl-lg-3"
                }, r.a.createElement("h6", {
                    className: "text-white font-weight-bold mb-3"
                }, e(I)), r.a.createElement(c.a, {
                    component: "div",
                    className: "nav-transparent-alt flex-column"
                }, r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "/teal",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(j)), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "/Wise_Audit_Report.pdf",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(W)), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "https://drive.google.com/drive/folders/1IcU9eCNQ0Do_XCWV8CLjHQ7YlXgPDYi5?usp=sharing",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(R)), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    href: "https://bitwiseguy.threadless.com/",
                    className: "d-block text-xl-left d-xl-flex px-0 py-1 text-center"
                }, e(A)))))))), r.a.createElement("div", {
                    className: "divider border-2 d-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto my-5 w-50"
                }), r.a.createElement(c.a, {
                    component: "div",
                    className: "nav-transparent-alt text-nowrap d-flex flex-wrap justify-content-center"
                }, r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-twitter hover-scale-lg",
                    href: "https://t.me/WiseToken"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "telegram"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-youtube hover-scale-lg",
                    href: "https://www.youtube.com/channel/UCkrhXAz9MIpCARoZ0SeibDA"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "youtube"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-facebook hover-scale-lg",
                    href: "https://www.facebook.com/wisetokens"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "facebook"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-twitter hover-scale-lg",
                    href: "https://twitter.com/wise_token"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "twitter"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-instagram hover-scale-lg",
                    href: "https://www.instagram.com/wisetoken/"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "instagram"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-reddit hover-scale-lg",
                    href: "https://www.reddit.com/r/WiseTokenOfficial/"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "reddit"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-discord hover-scale-lg",
                    href: "https://discord.gg/keJUb4W"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "discord"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-github hover-scale-lg",
                    href: "https://bitwiseguy.threadless.com/"
                }, r.a.createElement(s.a, {
                    icon: ["fa", "tshirt"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-github hover-scale-lg",
                    href: "https://gitter.im/WiseToken/community"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "gitter"],
                    className: "font-size-xxl"
                })), r.a.createElement(d.a, {
                    component: "a",
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-github hover-scale-lg",
                    href: "https://github.com/wise-foundation"
                }, r.a.createElement(s.a, {
                    icon: ["fab", "github"],
                    className: "font-size-xxl"
                }))), r.a.createElement("div", {
                    className: "py-3 d-block d-lg-flex align-items-center justify-content-between"
                }, r.a.createElement("div", {
                    className: "text-center d-block mb-3 mb-md-0 text-white w-100"
                }, "Copyright \xa9 2020 \u2014 The Wise Foundation", r.a.createElement("br", null), "ALL RIGHTS RESERVED")))))
            }
        },
        766: function(e, t, a) {
            "use strict";
            var n = a(1),
                r = a(13),
                s = a(0),
                i = (a(10), a(9)),
                l = a(727),
                o = a(23),
                c = s.forwardRef((function(e, t) {
                    var a = e.classes,
                        o = e.className,
                        c = e.raised,
                        d = void 0 !== c && c,
                        u = Object(r.a)(e, ["classes", "className", "raised"]);
                    return s.createElement(l.a, Object(n.a)({
                        className: Object(i.a)(a.root, o),
                        elevation: d ? 8 : 1,
                        ref: t
                    }, u))
                }));
            t.a = Object(o.a)({
                root: {
                    overflow: "hidden"
                }
            }, {
                name: "MuiCard"
            })(c)
        },
        767: function(e, t, a) {
            "use strict";
            var n = a(59);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(a(0)),
                s = (0, n(a(64)).default)(r.default.createElement(r.default.Fragment, null, r.default.createElement("path", {
                    d: "M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z",
                    opacity: ".3"
                }), r.default.createElement("path", {
                    d: "M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z"
                })), "ViewCompactTwoTone");
            t.default = s
        },
        768: function(e, t, a) {
            "use strict";
            var n = a(59);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(a(0)),
                s = (0, n(a(64)).default)(r.default.createElement(r.default.Fragment, null, r.default.createElement("path", {
                    d: "M10 10h4v4h-4zm0 6h4v4h-4zM4 4h4v4H4zm0 6h4v4H4zm0 6h4v4H4zM16 4h4v4h-4zm0 6h4v4h-4zm0 6h4v4h-4zM10 4h4v4h-4z",
                    opacity: ".3"
                }), r.default.createElement("path", {
                    d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"
                })), "GridOnTwoTone");
            t.default = s
        },
        773: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return le
            }));
            var n = a(25),
                r = a(0),
                s = a.n(r),
                i = a(9),
                l = a(241),
                o = a.n(l),
                c = a(18),
                d = a(763),
                u = a(726),
                p = a(744),
                m = a(736),
                f = a(728),
                b = a(730),
                h = a(703),
                g = a(764),
                y = a(734),
                v = a(26),
                E = a(166),
                w = a(120),
                x = a(4),
                S = a.n(x),
                N = a(143),
                T = a(754),
                k = a(114),
                O = a.n(k),
                C = a(42),
                M = (a(145), a(80)),
                I = a(748),
                j = a(164);
            new M.a({
                supportedChainIds: [1, 3, 4, 5, 42]
            });

            function W() {
                var e = Object(C.b)(),
                    t = e.chainId,
                    a = (e.account, e.library, e.activate, e.active, e.connector, !!window.ethereum || window.web3, Object(j.a)(parseInt(t))),
                    i = window.ethereum && window.ethereum.selectedAddress ? new O.a(O.a.givenProvider) : new O.a(new O.a.providers.HttpProvider(a.infuraURL)),
                    l = new i.eth.Contract(I, a.address),
                    o = Object(r.useState)(0),
                    c = Object(n.a)(o, 2),
                    d = (c[0], c[1]);
                Object(r.useEffect)((function() {
                    (function() {
                        var e = Object(N.a)(S.a.mark((function e() {
                            var t, a;
                            return S.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, l.methods.g().call();
                                    case 3:
                                        t = e.sent, a = i.utils.fromWei(t.totalWeiContributed), d(a.toLocaleString()), e.next = 10;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []);
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", null, s.a.createElement(T.a, {
                    date: "2020-10-07",
                    renderer: function(e) {
                        var t = e.days,
                            a = e.hours,
                            n = e.minutes,
                            r = e.seconds,
                            i = e.completed,
                            l = [],
                            o = !1;
                        t > 0 && (o = !0, l.push("".concat(t, " day").concat(1 === t ? "" : "s"))), (a > 0 || o) && (o = !0, l.push("".concat(a, " hour").concat(1 === a ? "" : "s"))), (n > 0 || o) && (o = !0, l.push("".concat(n, " min").concat(1 === n ? "" : "s"))), (r > 0 || o) && l.push("".concat(r, " sec").concat(1 === r ? "" : "s"));
                        var c = l.join(", ");
                        return s.a.createElement("div", {
                            className: "bg-new bg-teal-trans text-center text-white font-size-sm px-4 pt-1 pb-1 d-flex align-items-center justify-content-center"
                        }, i && s.a.createElement("div", {
                            className: "font-size-md font-weight-bold"
                        }, "Now trading on ", s.a.createElement("a", {
                            className: "banner-uniswap-link",
                            href: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x66a0f676479cee1d7373f3dc2e2952778bff5bd6",
                            target: "_blank"
                        }, "Uniswap"), "!"), !i && s.a.createElement("div", null, "LAUNCH IN: \xa0", c))
                    }
                })))
            }
            var R = a(35),
                A = a(167),
                D = a.n(A),
                U = a(345),
                P = a(239),
                z = a.n(P),
                L = a(752),
                _ = a(780),
                H = a.n(_),
                F = a(781),
                q = a.n(F),
                V = (new D.a({
                    network: "mainnet",
                    cacheProvider: !0,
                    providerOptions: {}
                }), {
                    id: "app.labels.decentralizedFinance",
                    defaultMessage: "Decentralized Finance"
                }),
                G = {
                    id: "app.labels.wiseFoundation",
                    defaultMessage: "Wise Foundation"
                },
                B = {
                    id: "app.labels.reservations",
                    defaultMessage: "Reservations"
                },
                Y = {
                    id: "app.labels.dashboard",
                    defaultMessage: "Dashboard"
                },
                Q = {
                    id: "app.labels.hub",
                    defaultMessage: "Hub"
                },
                X = {
                    id: "app.labels.referrals",
                    defaultMessage: "Referrals"
                },
                Z = {
                    id: "app.labels.docs",
                    defaultMessage: "Docs"
                },
                J = {
                    id: "app.labels.connectWithMetamask",
                    defaultMessage: "Connect With Metamask"
                },
                K = {
                    id: "app.labels.metamaskRequired",
                    defaultMessage: "MetaMask Required"
                },
                $ = {
                    id: "app.labels.thisWillAllow",
                    defaultMessage: "This will allow you to interract with the blockchain"
                },
                ee = {
                    id: "app.labels.learnMore",
                    defaultMessage: "Learn More"
                },
                te = {
                    id: "app.labels.installMetamask",
                    defaultMessage: "Install MetaMask"
                },
                ae = {
                    id: "app.labels.otherWallet",
                    defaultMessage: "Other wallet providers support coming soon"
                },
                ne = {
                    id: "app.labels.navigationMenu",
                    defaultMessage: "Navigation Menu"
                },
                re = {
                    id: "app.labels.overview",
                    defaultMessage: "Overview"
                },
                se = {
                    id: "app.labels.tokenReservations",
                    defaultMessage: "Token Reservations"
                },
                ie = {
                    id: "app.labels.documentation",
                    defaultMessage: "Documentation"
                };

            function le() {
                var e = !!window.ethereum || !!window.web3,
                    t = Object(R.c)(),
                    a = Object(r.useState)(!1),
                    l = Object(n.a)(a, 2),
                    x = l[0],
                    S = l[1],
                    N = Object(U.a)().formatMessage,
                    T = function() {
                        return S(!x)
                    },
                    k = Object(r.useState)(!1),
                    O = Object(n.a)(k, 2),
                    C = O[0],
                    M = O[1],
                    I = function() {
                        M(!C)
                    },
                    j = s.a.useState(null),
                    A = Object(n.a)(j, 2),
                    D = A[0],
                    P = A[1],
                    _ = Boolean(D),
                    F = function(e) {
                        P(e.currentTarget)
                    },
                    le = function(e, a) {
                        t(Object(L.b)(a)), P(null)
                    };
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: "bg-white-10 p-2 pt-4 pb-4 header-nav-wrapper header-nav-wrapper-xl px-4 navbar-dark"
                }, s.a.createElement(d.a, {
                    className: "d-flex header-nav-menu justify-content-between align-items-center navbar-dark"
                }, s.a.createElement("div", {
                    className: "app-nav-logo"
                }, s.a.createElement(v.b, {
                    to: "/",
                    className: "app-nav-logo app-nav-logo--light hover-scale-sm"
                }, s.a.createElement("div", {
                    className: "app-nav-logo--icon shadow-lg border-0"
                }, s.a.createElement(o.a, {
                    className: "wise-logo",
                    src: z.a
                }, s.a.createElement("img", {
                    src: z.a,
                    alt: "Wise Foundation"
                }))), s.a.createElement("div", {
                    className: "app-nav-logo--text"
                }, s.a.createElement("span", null, N(V)), s.a.createElement("b", null, N(G))))), s.a.createElement("div", {
                    className: "header-nav-menu d-none d-lg-block"
                }, s.a.createElement("ul", {
                    className: "d-flex nav nav-neutral-first justify-content-center"
                }, s.a.createElement("li", null, s.a.createElement(v.b, {
                    to: "/reservations",
                    className: "font-size-md font-weight-bold rounded-sm px-3 text-white"
                }, N(B))), s.a.createElement("li", null, s.a.createElement(v.b, {
                    to: "/referrals",
                    className: "font-size-md font-weight-bold rounded-sm px-3 text-white"
                }, N(X))), s.a.createElement("li", null, s.a.createElement(v.b, {
                    to: "/hub",
                    className: "font-size-md font-weight-bold rounded-sm px-3 text-white"
                }, N(Q))), s.a.createElement("li", null, s.a.createElement(v.b, {
                    to: "/dashboard",
                    className: "font-size-md font-weight-bold rounded-sm px-3 text-white"
                }, N(Y))), s.a.createElement("li", null, s.a.createElement(v.b, {
                    to: "/docs",
                    className: "font-size-md font-weight-bold rounded-sm px-3 text-white"
                }, N(Z))))), s.a.createElement("div", {
                    className: "header-nav-actions flex-grow-0 flex-lg-grow-1"
                }, e && s.a.createElement("div", {
                    className: "d-none d-lg-block"
                }, s.a.createElement(w.a, null)), !e && s.a.createElement("div", null, s.a.createElement("span", {
                    className: "d-none d-lg-block"
                }, s.a.createElement(u.a, {
                    onClick: I,
                    className: "rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning hover-scale-sm"
                }, N(J)), s.a.createElement(p.a, {
                    open: C,
                    onClose: I,
                    classes: {
                        paper: "shadow-lg rounded"
                    }
                }, s.a.createElement("div", {
                    className: "text-center p-5"
                }, s.a.createElement("div", {
                    className: "avatar-icon-wrapper rounded-circle m-0"
                }, s.a.createElement(E.a, null)), s.a.createElement("div", {
                    className: "font-weight-bold font-size-lg mt-4"
                }, N(K)), s.a.createElement("p", {
                    className: "mb-0 mt-2"
                }, N($)), s.a.createElement("div", {
                    className: "pt-4"
                }, s.a.createElement(u.a, {
                    href: "https://metamask.io/",
                    target: "_blank",
                    className: "btn-secondary btn-pill mx-1"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, N(ee))), s.a.createElement(u.a, {
                    href: "https://metamask.io/download.html",
                    target: "_blank",
                    variant: "text",
                    className: "btn-outline-warning btn-pill mx-1"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, N(te)))), s.a.createElement("p", {
                    className: "mt-4 text-black-50"
                }, N(ae)))))), s.a.createElement("div", null, s.a.createElement("span", {
                    className: "d-block d-lg-none"
                }, s.a.createElement("button", {
                    onClick: T,
                    className: Object(i.a)("navbar-toggler hamburger hamburger--elastic", {
                        "is-active": x
                    })
                }, s.a.createElement("span", {
                    className: "hamburger-box"
                }, s.a.createElement("span", {
                    className: "hamburger-inner"
                })))))), s.a.createElement("div", {
                    className: "d-flex d-lg-none"
                }, s.a.createElement(m.a, { in: x,
                    className: "nav-collapsed-wrapper shadow-sm-dark navbar-collapse"
                }, s.a.createElement("div", {
                    className: "nav-inner-wrapper"
                }, s.a.createElement(u.a, {
                    onClick: T,
                    className: "btn-primary btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, s.a.createElement(c.a, {
                    icon: ["fas", "times"]
                }))), s.a.createElement("div", {
                    className: "p-3"
                }, s.a.createElement("div", {
                    className: "px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm"
                }, N(ne)), s.a.createElement(f.a, {
                    component: "div",
                    className: "nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                }, s.a.createElement(b.a, {
                    button: !0,
                    component: "a",
                    href: "/#overview",
                    className: "px-4 d-flex align-items-center"
                }, s.a.createElement("span", null, N(re)), s.a.createElement(c.a, {
                    icon: ["fas", "angle-right"],
                    className: "opacity-6 ml-auto"
                })), s.a.createElement(b.a, {
                    button: !0,
                    component: v.b,
                    to: "/reservations",
                    className: "px-4 d-flex align-items-center"
                }, s.a.createElement("span", null, N(se)), s.a.createElement(c.a, {
                    icon: ["fas", "angle-right"],
                    className: "opacity-6 ml-auto"
                })), s.a.createElement(b.a, {
                    button: !0,
                    component: v.b,
                    to: "/dashboard",
                    className: "px-4 d-flex align-items-center"
                }, s.a.createElement("span", null, N(Y)), s.a.createElement(c.a, {
                    icon: ["fas", "angle-right"],
                    className: "opacity-6 ml-auto"
                })), s.a.createElement(b.a, {
                    button: !0,
                    component: v.b,
                    to: "/hub",
                    className: "px-4 d-flex align-items-center"
                }, s.a.createElement("span", null, N(Q)), s.a.createElement(c.a, {
                    icon: ["fas", "angle-right"],
                    className: "opacity-6 ml-auto"
                })), s.a.createElement(b.a, {
                    button: !0,
                    component: v.b,
                    to: "/referrals",
                    className: "px-4 d-flex align-items-center"
                }, s.a.createElement("span", null, N(X)), s.a.createElement(c.a, {
                    icon: ["fas", "angle-right"],
                    className: "opacity-6 ml-auto"
                })), s.a.createElement(b.a, {
                    button: !0,
                    component: v.b,
                    to: "/docs",
                    className: "px-4 d-flex align-items-center"
                }, s.a.createElement("span", null, N(ie)), s.a.createElement(c.a, {
                    icon: ["fas", "angle-right"],
                    className: "opacity-6 ml-auto"
                })))), s.a.createElement("div", {
                    className: "divider"
                }), s.a.createElement("div", {
                    className: "card-footer bg-secondary text-center p-3"
                }, s.a.createElement(w.a, null))))), s.a.createElement("div", {
                    className: "header-nav-actions flex-grow-0 language"
                }, s.a.createElement("div", null, s.a.createElement(u.a, {
                    "aria-controls": "fade-menu",
                    "aria-haspopup": "true",
                    onClick: F
                }, s.a.createElement(c.a, {
                    className: "font-size-xxl text-white",
                    icon: ["fas", "language"],
                    onClick: F
                }))), s.a.createElement(h.a, {
                    className: "f16",
                    id: "fade-menu",
                    anchorEl: D,
                    keepMounted: !0,
                    open: _,
                    onClose: function(e) {
                        return le()
                    },
                    TransitionComponent: y.a
                }, s.a.createElement(g.a, {
                    key: 0,
                    onClick: function(e) {
                        return le(0, "en")
                    }
                }, s.a.createElement("span", {
                    className: "flag us"
                }), "English"), s.a.createElement(g.a, {
                    key: 1,
                    onClick: function(e) {
                        return le(0, "zh")
                    }
                }, s.a.createElement("span", {
                    className: "flag cn"
                }), "Chinese"), s.a.createElement(g.a, {
                    key: 2,
                    onClick: function(e) {
                        return le(0, "pt")
                    }
                }, s.a.createElement("span", {
                    className: "flag br"
                }), "Portuguese"))))), !(window.location.href.includes("/docs") || window.location.href.includes("/personal") || window.location.href.includes("/dashboard") || window.location.href.includes("/reserve") || window.location.href.includes("/refer") || window.location.href.includes("/staking") || window.location.href.includes("/gas")) && s.a.createElement("div", {
                    className: "telegram"
                }, s.a.createElement("a", {
                    href: "https://t.me/WiseToken",
                    target: "_blank"
                }, s.a.createElement("img", {
                    id: "telegram-light",
                    src: H.a,
                    alt: "Telegram"
                }), s.a.createElement("img", {
                    id: "telegram-dark",
                    src: q.a,
                    alt: "Telegram"
                }))), s.a.createElement("div", {
                    className: Object(i.a)("collapse-page-trigger", {
                        "is-active": x
                    }),
                    onClick: T
                }), s.a.createElement(W, null))
            }
        },
        780: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TS0UqDnYQcchQnSxIFXHUKhShQqgVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ptIjx4Lgf7+497t4BQrPKNKtnAtB028ykkmIuvyqGXxGGgBBEJGRmGXOSlIbv+LpHgK93cZ7lf+7P0a8WLAYEROJZZpg28Qbx9KZtcN4njrKyrBKfE4+bdEHiR64rHr9xLrks8Myomc3ME0eJxVIXK13MyqZGPEUcUzWd8oWcxyrnLc5atc7a9+QvjBT0lWWu0xxBCotYgkQdKaijgipsxGnVSbGQof2kj3/Y9UvkUshVASPHAmrQILt+8D/43a1VnEx4SZEkEHpxnI9RILwLtBqO833sOK0TIPgMXOkdf60JzHyS3uhosSNgYBu4uO5oyh5wuQMMPRmyKbtSkKZQLALvZ/RNeWDwFuhb83pr7+P0AchSV+kb4OAQGCtR9rrPu3u7e/v3TLu/H1mXcp27Ax+WAAAABmJLR0QACAAhACNS260bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG1ElEQVRo3t2bbWxbVxnHf+f6xq5fkq1bk3RJG98sKdPSVGWFdkPxVjpQ0ZA22g6h0hg0CU0tIKHtA6JCmtqJTfCltEK8LBIfGHXGBmztOvEm6AqlhW2ROkqcrKNZY69JmmR5dVI7fj188E2JEyd+u04c/lK+XN97fX55znme5zzPscBg3ePxWcoELcAOoEn/Ww/Uzru1HxgEuoEuoCMqxYX33c6IkeMRRrxky6+u22Qi/hjgBnYBtjxfFQTeBNqFYjrT+eWNwRUFbPL4qhXBYeAJ4HaDJ8ME8IuE5Pvdbm14WQGbPL0VihBHgYMFWCsXq7YlJEe73Vqg6IDN7b69QBtQyfJqGDjkbdVOFQWwud1n08HcrKxO6qBBwwCbX/I7kfJ1YCuloXcRYq/3gNNfMOBmj+9uIXgTcFJa8kvJri631ps3oA53UY9jpagBKXEtBaksNS11y5UqHECNEJxrfsnvzMmCukP5RwmtucxrElzpHM9iFmxbRXAA9wEvZGVBPc69xurUvvlxUqTJUHpWIIgblgzEErLxylfqp9JOUT39Wq1wAFWqIp5Na8EmT2+1IsS1Zcgti62glGhdbu2jFAsqQhwuJTjNrPDMveW8sbua83tqsSpZP2oTgu+mWFDfz/UXYcuTs77utLKz3sE91VZUU3KCJSRse9lPXGa/1RImtbZz/4agCiAT8S+sJNwjd5TxaIODbXV27BbTgs8HJyO5wAHcLuOxR4FXVP1C63JDbbGa+FKDnQecdtbfZl7y3r7xcD5f4QZeUT/m8VtAPrwcUAngW/U2Pl3voLFqDSYlNQyPTEf5W88Uj3/8jpTrPWN5lWl2bfL4zapZkS1IrMUEe2ydmUfutrOtzoHNvNBbROOSv/5nkvN9Ib7tWhil3v0oLwvaLUK6VCQ7igHVbDWxv8HO/RmmoG9khh91jFFjM3Hk4fW3HMusIrEEfxyL5juM7SrJsp4hsgg4qNnYWe+gsdqKssRmbCaa4PXOcZ67Ms03NRtfu3/dAjiAG5MFVRGbDAH8YpWFzzXY2Vprx2rOHLDeuxHk+bfHuByM82xTOfvmrbm5+nC8IMDNar77va02Ewc2OdheZ6eyvCyrZ6Zm4rRfGuMnvuSu5th9t7H73qWj09XRggCrVBZWnDOqpVzlx5+vSTulFtM7vime6RhnICqRwC9dd7KtzpHxubeGw4UAblTzeao3FOfayAwNlQtd/XyNTkf56duj/HooOdDaMsEPXetouitzVjgdjvPPqVhByycvwIGY5PGzw2hmhT0b1vApp52GyjVYVCXF9Z+/GuB7lycZ1dOQGlXw889Ws2GtJbvvmSi8TaEW8rAvkuDEtSAnrgVRgINOK5+stbFDc3BlMMhTlyZu3ftQhcqRh6qoqijL+v3+MWMA+/NZh+mylJ/5Q+AP8ee1ZhorrUg9m3+wQuUHn1lPudWU0zuvjIYLHdZ1hWQLy1D9eyCI1azw1Zo1tFSoHNt9V85wAGeHCgYcVkj25wzV6Q9uAvBArZUaqymr2Dhf4zdjfBBOFDqUrqIA/j0QY3AywpYaG7V2U17v6JsIGzGUbgV4pxi5qPdGiLV2lcY7Uz3mRDBGIBTP7MDGjGj0ig4lKsVFkj04Q/Xbq9MAfKLO/r8VPxbm4J8GefIPA/QMh5b+B40UbMGbM1JeUN53O8Mk28aG6uJUjKFABIe+Q+8bC/Pk2SG6Q3G6ZxLs/cswv++aILbIVv3UUMEWPNfj1iKzq7+9GNO0w590Nh/qcP3RVJjvXJ7kuXODTARTs5WhQIRQQhb69Z5bgV4opjMyEZ8wui5zuDPApeEwv1nC3b86HOGt3w1wrGUdm2uS6Vtv4fFvXJjUN25V1QCa233HgadWsqL2dIOdpkoLJ7sDnA8UlIOe8LZqT6cANnl8VYqgl/+Dwi9Ip7e1fgTmFH71oxptrH61zcKlAAIkJEdJnmZYrRqKJ+SRuRdSAPVzKIdWMeCh9+Z0lhYAAuj9tZOrEO5Fb6t2ev7FxbLgQ8C/VhHcJeAb6T5IC+ht1YIIsQfwrwI4P0LZt9jBoEzHSOqF4AJQU6Jw/VLS0uXWFjXEkhu1LrfWKyWuErWkPxNcRsBZSITYSfKoRumsOaHszASXFSCAfibMVSLe9UXgQe+BuqxmVb7HKV8AqpY7iJM8ZXg6l4dyLpZ4W7VTsYRsBI4XY6OcPrfkeDwhN+UKl5cF53nZSr3h/wTGt8DHk9NRPj83t1xWwFltebnPpvfEZw+l2/MtMwDnAI8wqWc6928IFVyVMXo+bfL4zRYhXcB2kq25zfp63Tjv1ut6Yt8FdIPomJHyQo9bM/RnBf8Fx+lfnGg9TmcAAAAASUVORK5CYII="
        },
        781: function(e, t) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TS0UqDnYQcYhYnSyIijhqFYpQIdQKrTqYXPohNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEydFJ0UVK/F9SaBHjwXE/3t173L0DhHqZaVbHGKDptplOJsRsbkUMvyIMASEMYkhmljErSSn4jq97BPh6F+dZ/uf+HN1q3mJAQCSeYYZpE68TT23aBud94igrySrxOfGoSRckfuS64vEb56LLAs+Mmpn0HHGUWCy2sdLGrGRqxJPEMVXTKV/Ieqxy3uKslauseU/+wkheX17iOs0BJLGARUgQoaCKDZRhI06rToqFNO0nfPz9rl8il0KuDTByzKMCDbLrB/+D391ahYlxLymSAEIvjvMxDIR3gUbNcb6PHadxAgSfgSu95a/UgelP0mstLXYE9GwDF9ctTdkDLneAvidDNmVXCtIUCgXg/Yy+KQf03gJdq15vzX2cPgAZ6ip1AxwcAiNFyl7zeXdne2//nmn29wM2w3KPqLBU9wAAAAZiS0dEAAgAIQAjUtutGwAAAAlwSFlzAAALEwAACxMBAJqcGAAABupJREFUaN7dm21QVOcVx397926XXYioBVkDCFaWbNQkWgPitjHGNM3oJNEkTRzGSrexaj+10xJNtdOaGccOU2VSk0mbpE1DxlBsMlFMqCV9SUhbS0HNaEoVRSQI4gVc2MiyyMKy/XAXysuyb/cuLP1/3Huffc5/z3nO23NWg8owFZbEA7nASmApYAHSgJRxr7YDrUA9UAfUIAi10oGCXjXl0ahEygg8CWwC1gFChF/lAj4CjgBHpWKba1oJmp4rvZ3BgZ2ADZitsjE4gBJ0+iKpKL99SgmaCkuSgD3ADsBIdOECXgP2S8W2G1EnaCoseQJ4FUhiatEJ7JCKbceiQtB3zn4D5DO9OAJsDfV8akIklwG8B9xNbOBT4DGp2NasmKCpsMQCVAIZxBaaEbQPSge2NEZM0EfuJDCX2EQXgjY3EEkhiFlWxjA5gLkMef7qkzV0DfocSnUMnblgOAdY/TmeyTT4+gwiB3CPT+bgGvTFuXeZmXhifJzU+MlQLkxDEFcvGYiLz5b2P+WYzET3zGByAMnc6t3rV4OmZ99Mw+u9OAW5ZbTh8mp1C9t/vrkDQBz52OstjCVyS2cZ2Go1k7ckk8QEPdai4zj63aEsNWo8A7uBH4xo0BcWrkWh5Akbe1Zl8cCyhVgy5yNqZQMb8sLC3aW4BwfDKbVSpWKba1iDT04nufyseWxcmc0KSzrxhi9MeC7Ze8IhBzAbjWYDUDZMcNNUk7LONbLZegfWuzIxfXFWwHdb2rvC38Dr3QyUib4eytqpIDUkCOxdtYi1y7+EeUEKWmFsGL7hcPLRJ5d5au2yMZ83XOuKZLs1pl1vGUVfg8gQTWIFlvk8kpPFijvSMcbpJjwf8Azx4amLVJ2/xu5N9014fqapI5Jt4/EM5onI3S/1TTDpNrZYs8lbsiCgCTZd7+KFo9Wkzo5jX8EDiKJ2zHP34BBHGiJuyeSKyK09VZAgijy7ahFr7snEnGFCCFCM3XIPcuxvdfyw8hw/WX0n29bfiyhOTI3bOh2AN+JoIyL3LRVh2+L5rMsxsyw7HYNeDPr++SaJ59/+J3/v7OGldXfxjQe/PHlVK3UpEc0iIjdlw8ZXkxKw3WchZ3Em8+bEh7Smx9XP4Q/OsO9kAwAlT1t5ONcccE1Dq10JwTSRiR3noFh/eyKvfO9RdOPOSyDU1H3GzreraXC5QSNQ8cxqVtwZvAty8nK7EoIpYiSrLjn6uNJmJysteYKrHw/7505eOn6KVz+9CkC2UcevnnmIxZnJQfdx9rmpvNat6PhERPCyy82aF//I0lkGnl6ewVeWZrAoLQm9Thzl+r1Unb7Aj98/S8utAQDMCQZKv/s10kyhdUHaOhyKHZ+oZHHdzT7qPq6Hj+sRtVqey80kx5LOyiUZ1Dddp+CdUyPvPpqayD7bQ6SEeF4BmpQ5mJF6sB0VMOjxsL+6kY1vVCHZe8hKT8arkc33kYxkDm5/OCxyABeaFYvWLiBfYamKsw2tGPQ6vr98AetTE3lx+9eZFR9+slR54bpSUVoF5Ps5VfHuv+QwYLWkkZpoDCk2jkf3TRfnevqVilIvIF8+qoqK1m4ku5O7zamkz5sT2U/f0a2GKHUCUBONXPTfl1uZc5sBc+pYj9nd4+KmK7hmrrR1qSFGrQDUAn1qE/x9jdxNv3dUMG/puMm3X66k4FAFDS2dgX+gq3alIvSi01cLUrGtF/hQbYJ/uHqD9m4nCXHy+WuR7Hzz5RPU3Oihxu5k9aETVPyjjkGP/0S69HybUhGqpKL8vuH0/Ug0zLTmP3L2clXqYssvP+BS71jT3FZ+huff/AuOnrEGJHU5cbgHlG7/u+E4CHDU16hRFduOn+anv/0Tq144wUWXf4FfP9/GhgPl1DVeH1MjKoQDKAfQAjirywcSrBtNQJ6aBDXAJ51OvN7A9Zx9wMPh043Mdrvp73fzxp/PcklZiHhFKrZVjLQNAUw/KkthoP8K/weNXyBjeGBhpIT2jWq8xszHr0dPY4zvEexHnmaYqehEb9g7Ptn+n/eSme+YwQS3Sz/b9PmkBH0kj0UrbEQZZVKxrdxfueQPW5FHNWYKzgHfmawexI8WXcBjQPMMINcMbJhsMCjwGMnOw4sY8tQSy2MkGk2OdPBbVwJV9JNCOrClEUGbG6OabEYjrAhELijBEZJwv8/OY+nM3S8dLPgslJ5MUPhmwqwx4l3LkGdiQrKqSMYpH0cep0yeYmKdwHZ/oUCxBifEybj4bOAXvrxvKnLLQ+gN5nDJRaTB0UjZVTrPd+FvI1ojzRFO+qpCcJTZGtFoNviujdcA8RF+VS9Q5StWy6d9KN0v2V1vGfEM5iHfHIfzt4JadPpqqShf1f7QfwHTQFf0SLfvIQAAAABJRU5ErkJggg=="
        },
        790: function(e, t, a) {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var a, n, r = function(e, t) {
                    if (null == e) return {};
                    var a, n, r = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) a = s[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) a = s[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            a.d(t, "a", (function() {
                return n
            }))
        },
        791: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0;
            var n = s(a(0)),
                r = s(a(28));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(a, !0).forEach((function(t) {
                        o(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : i(a).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function o(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var c = function(e) {
                for (var t = [], a = d(e), n = u(e), r = a; r < n; r++) e.lazyLoadedList.indexOf(r) < 0 && t.push(r);
                return t
            };
            t.getOnDemandLazySlides = c;
            t.getRequiredLazySlides = function(e) {
                for (var t = [], a = d(e), n = u(e), r = a; r < n; r++) t.push(r);
                return t
            };
            var d = function(e) {
                return e.currentSlide - p(e)
            };
            t.lazyStartIndex = d;
            var u = function(e) {
                return e.currentSlide + m(e)
            };
            t.lazyEndIndex = u;
            var p = function(e) {
                return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
            };
            t.lazySlidesOnLeft = p;
            var m = function(e) {
                return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
            };
            t.lazySlidesOnRight = m;
            var f = function(e) {
                return e && e.offsetWidth || 0
            };
            t.getWidth = f;
            var b = function(e) {
                return e && e.offsetHeight || 0
            };
            t.getHeight = b;
            var h = function(e) {
                var t, a, n, r, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t = e.startX - e.curX, a = e.startY - e.curY, n = Math.atan2(a, t), (r = Math.round(180 * n / Math.PI)) < 0 && (r = 360 - Math.abs(r)), r <= 45 && r >= 0 || r <= 360 && r >= 315 ? "left" : r >= 135 && r <= 225 ? "right" : !0 === s ? r >= 35 && r <= 135 ? "up" : "down" : "vertical"
            };
            t.getSwipeDirection = h;
            var g = function(e) {
                var t = !0;
                return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1), t
            };
            t.canGoNext = g;
            t.extractObject = function(e, t) {
                var a = {};
                return t.forEach((function(t) {
                    return a[t] = e[t]
                })), a
            };
            t.initializedState = function(e) {
                var t, a = n.default.Children.count(e.children),
                    s = Math.ceil(f(r.default.findDOMNode(e.listRef))),
                    i = Math.ceil(f(r.default.findDOMNode(e.trackRef)));
                if (e.vertical) t = s;
                else {
                    var l = e.centerMode && 2 * parseInt(e.centerPadding);
                    "string" === typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (l *= s / 100), t = Math.ceil((s - l) / e.slidesToShow)
                }
                var o = r.default.findDOMNode(e.listRef) && b(r.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')),
                    d = o * e.slidesToShow,
                    u = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
                e.rtl && void 0 === e.currentSlide && (u = a - 1 - e.initialSlide);
                var p = e.lazyLoadedList || [],
                    m = c({
                        currentSlide: u,
                        lazyLoadedList: p
                    });
                p.concat(m);
                var h = {
                    slideCount: a,
                    slideWidth: t,
                    listWidth: s,
                    trackWidth: i,
                    currentSlide: u,
                    slideHeight: o,
                    listHeight: d,
                    lazyLoadedList: p
                };
                return null === e.autoplaying && e.autoplay && (h.autoplaying = "playing"), h
            };
            t.slideHandler = function(e) {
                var t = e.waitForAnimate,
                    a = e.animating,
                    n = e.fade,
                    r = e.infinite,
                    s = e.index,
                    i = e.slideCount,
                    o = e.lazyLoadedList,
                    d = e.lazyLoad,
                    u = e.currentSlide,
                    p = e.centerMode,
                    m = e.slidesToScroll,
                    f = e.slidesToShow,
                    b = e.useCSS;
                if (t && a) return {};
                var h, y, v, E = s,
                    w = {},
                    T = {};
                if (n) {
                    if (!r && (s < 0 || s >= i)) return {};
                    s < 0 ? E = s + i : s >= i && (E = s - i), d && o.indexOf(E) < 0 && o.push(E), w = {
                        animating: !0,
                        currentSlide: E,
                        lazyLoadedList: o
                    }, T = {
                        animating: !1
                    }
                } else h = E, E < 0 ? (h = E + i, r ? i % m !== 0 && (h = i - i % m) : h = 0) : !g(e) && E > u ? E = h = u : p && E >= i ? (E = r ? i : i - 1, h = r ? 0 : i - 1) : E >= i && (h = E - i, r ? i % m !== 0 && (h = 0) : h = i - f), y = N(l({}, e, {
                    slideIndex: E
                })), v = N(l({}, e, {
                    slideIndex: h
                })), r || (y === v && (E = h), y = v), d && o.concat(c(l({}, e, {
                    currentSlide: E
                }))), b ? (w = {
                    animating: !0,
                    currentSlide: h,
                    trackStyle: S(l({}, e, {
                        left: y
                    })),
                    lazyLoadedList: o
                }, T = {
                    animating: !1,
                    currentSlide: h,
                    trackStyle: x(l({}, e, {
                        left: v
                    })),
                    swipeLeft: null
                }) : w = {
                    currentSlide: h,
                    trackStyle: x(l({}, e, {
                        left: v
                    })),
                    lazyLoadedList: o
                };
                return {
                    state: w,
                    nextState: T
                }
            };
            t.changeSlide = function(e, t) {
                var a, n, r, s, i = e.slidesToScroll,
                    o = e.slidesToShow,
                    c = e.slideCount,
                    d = e.currentSlide,
                    u = e.lazyLoad,
                    p = e.infinite;
                if (a = c % i !== 0 ? 0 : (c - d) % i, "previous" === t.message) s = d - (r = 0 === a ? i : o - a), u && !p && (s = -1 === (n = d - r) ? c - 1 : n);
                else if ("next" === t.message) s = d + (r = 0 === a ? i : a), u && !p && (s = (d + i) % c + a);
                else if ("dots" === t.message) {
                    if ((s = t.index * t.slidesToScroll) === t.currentSlide) return null
                } else if ("children" === t.message) {
                    if ((s = t.index) === t.currentSlide) return null;
                    if (p) {
                        var m = C(l({}, e, {
                            targetSlide: s
                        }));
                        s > t.currentSlide && "left" === m ? s -= c : s < t.currentSlide && "right" === m && (s += c)
                    }
                } else if ("index" === t.message && (s = Number(t.index)) === t.currentSlide) return null;
                return s
            };
            t.keyHandler = function(e, t, a) {
                return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? a ? "next" : "previous" : 39 === e.keyCode ? a ? "previous" : "next" : ""
            };
            t.swipeStart = function(e, t, a) {
                return "IMG" === e.target.tagName && e.preventDefault(), !t || !a && -1 !== e.type.indexOf("mouse") ? "" : {
                    dragging: !0,
                    touchObject: {
                        startX: e.touches ? e.touches[0].pageX : e.clientX,
                        startY: e.touches ? e.touches[0].pageY : e.clientY,
                        curX: e.touches ? e.touches[0].pageX : e.clientX,
                        curY: e.touches ? e.touches[0].pageY : e.clientY
                    }
                }
            };
            t.swipeMove = function(e, t) {
                var a = t.scrolling,
                    n = t.animating,
                    r = t.vertical,
                    s = t.swipeToSlide,
                    i = t.verticalSwiping,
                    o = t.rtl,
                    c = t.currentSlide,
                    d = t.edgeFriction,
                    u = t.edgeDragged,
                    p = t.onEdge,
                    m = t.swiped,
                    f = t.swiping,
                    b = t.slideCount,
                    y = t.slidesToScroll,
                    v = t.infinite,
                    E = t.touchObject,
                    w = t.swipeEvent,
                    S = t.listHeight,
                    T = t.listWidth;
                if (!a) {
                    if (n) return e.preventDefault();
                    r && s && i && e.preventDefault();
                    var k, O = {},
                        C = N(t);
                    E.curX = e.touches ? e.touches[0].pageX : e.clientX, E.curY = e.touches ? e.touches[0].pageY : e.clientY, E.swipeLength = Math.round(Math.sqrt(Math.pow(E.curX - E.startX, 2)));
                    var M = Math.round(Math.sqrt(Math.pow(E.curY - E.startY, 2)));
                    if (!i && !f && M > 10) return {
                        scrolling: !0
                    };
                    i && (E.swipeLength = M);
                    var I = (o ? -1 : 1) * (E.curX > E.startX ? 1 : -1);
                    i && (I = E.curY > E.startY ? 1 : -1);
                    var j = Math.ceil(b / y),
                        W = h(t.touchObject, i),
                        R = E.swipeLength;
                    return v || (0 === c && "right" === W || c + 1 >= j && "left" === W || !g(t) && "left" === W) && (R = E.swipeLength * d, !1 === u && p && (p(W), O.edgeDragged = !0)), !m && w && (w(W), O.swiped = !0), k = r ? C + R * (S / T) * I : o ? C - R * I : C + R * I, i && (k = C + R * I), O = l({}, O, {
                        touchObject: E,
                        swipeLeft: k,
                        trackStyle: x(l({}, t, {
                            left: k
                        }))
                    }), Math.abs(E.curX - E.startX) < .8 * Math.abs(E.curY - E.startY) ? O : (E.swipeLength > 10 && (O.swiping = !0, e.preventDefault()), O)
                }
            };
            t.swipeEnd = function(e, t) {
                var a = t.dragging,
                    n = t.swipe,
                    r = t.touchObject,
                    s = t.listWidth,
                    i = t.touchThreshold,
                    o = t.verticalSwiping,
                    c = t.listHeight,
                    d = t.currentSlide,
                    u = t.swipeToSlide,
                    p = t.scrolling,
                    m = t.onSwipe;
                if (!a) return n && e.preventDefault(), {};
                var f = o ? c / i : s / i,
                    b = h(r, o),
                    g = {
                        dragging: !1,
                        edgeDragged: !1,
                        scrolling: !1,
                        swiping: !1,
                        swiped: !1,
                        swipeLeft: null,
                        touchObject: {}
                    };
                if (p) return g;
                if (!r.swipeLength) return g;
                if (r.swipeLength > f) {
                    var y, w;
                    switch (e.preventDefault(), m && m(b), b) {
                        case "left":
                        case "up":
                            w = d + E(t), y = u ? v(t, w) : w, g.currentDirection = 0;
                            break;
                        case "right":
                        case "down":
                            w = d - E(t), y = u ? v(t, w) : w, g.currentDirection = 1;
                            break;
                        default:
                            y = d
                    }
                    g.triggerSlideHandler = y
                } else {
                    var x = N(t);
                    g.trackStyle = S(l({}, t, {
                        left: x
                    }))
                }
                return g
            };
            var y = function(e) {
                for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, a = e.infinite ? -1 * e.slidesToShow : 0, n = e.infinite ? -1 * e.slidesToShow : 0, r = []; a < t;) r.push(a), a = n + e.slidesToScroll, n += Math.min(e.slidesToScroll, e.slidesToShow);
                return r
            };
            t.getNavigableIndexes = y;
            var v = function(e, t) {
                var a = y(e),
                    n = 0;
                if (t > a[a.length - 1]) t = a[a.length - 1];
                else
                    for (var r in a) {
                        if (t < a[r]) {
                            t = n;
                            break
                        }
                        n = a[r]
                    }
                return t
            };
            t.checkNavigable = v;
            var E = function(e) {
                var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
                if (e.swipeToSlide) {
                    var a, n = r.default.findDOMNode(e.listRef).querySelectorAll(".slick-slide");
                    if (Array.from(n).every((function(n) {
                            if (e.vertical) {
                                if (n.offsetTop + b(n) / 2 > -1 * e.swipeLeft) return a = n, !1
                            } else if (n.offsetLeft - t + f(n) / 2 > -1 * e.swipeLeft) return a = n, !1;
                            return !0
                        })), !a) return 0;
                    var s = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
                    return Math.abs(a.dataset.index - s) || 1
                }
                return e.slidesToScroll
            };
            t.getSlideCount = E;
            var w = function(e, t) {
                return t.reduce((function(t, a) {
                    return t && e.hasOwnProperty(a)
                }), !0) ? null : console.error("Keys Missing:", e)
            };
            t.checkSpecKeys = w;
            var x = function(e) {
                var t, a;
                w(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                var n = e.slideCount + 2 * e.slidesToShow;
                e.vertical ? a = n * e.slideHeight : t = O(e) * e.slideWidth;
                var r = {
                    opacity: 1,
                    transition: "",
                    WebkitTransition: ""
                };
                e.useTransform ? r = l({}, r, {
                    WebkitTransform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    transform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    msTransform: e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)"
                }) : e.vertical ? r.top = e.left : r.left = e.left;
                return e.fade && (r = {
                    opacity: 1
                }), t && (r.width = t), a && (r.height = a), window && !window.addEventListener && window.attachEvent && (e.vertical ? r.marginTop = e.left + "px" : r.marginLeft = e.left + "px"), r
            };
            t.getTrackCSS = x;
            var S = function(e) {
                w(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                var t = x(e);
                return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
            };
            t.getTrackAnimateCSS = S;
            var N = function(e) {
                if (e.unslick) return 0;
                w(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                var t, a, n = e.slideIndex,
                    s = e.trackRef,
                    i = e.infinite,
                    l = e.centerMode,
                    o = e.slideCount,
                    c = e.slidesToShow,
                    d = e.slidesToScroll,
                    u = e.slideWidth,
                    p = e.listWidth,
                    m = e.variableWidth,
                    f = e.slideHeight,
                    b = e.fade,
                    h = e.vertical;
                if (b || 1 === e.slideCount) return 0;
                var g = 0;
                if (i ? (g = -T(e), o % d !== 0 && n + d > o && (g = -(n > o ? c - (n - o) : o % d)), l && (g += parseInt(c / 2))) : (o % d !== 0 && n + d > o && (g = c - o % d), l && (g = parseInt(c / 2))), t = h ? n * f * -1 + g * f : n * u * -1 + g * u, !0 === m) {
                    var y, v = r.default.findDOMNode(s);
                    if (y = n + T(e), t = (a = v && v.childNodes[y]) ? -1 * a.offsetLeft : 0, !0 === l) {
                        y = i ? n + T(e) : n, a = v && v.children[y], t = 0;
                        for (var E = 0; E < y; E++) t -= v && v.children[E] && v.children[E].offsetWidth;
                        t -= parseInt(e.centerPadding), t += a && (p - a.offsetWidth) / 2
                    }
                }
                return t
            };
            t.getTrackLeft = N;
            var T = function(e) {
                return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
            };
            t.getPreClones = T;
            var k = function(e) {
                return e.unslick || !e.infinite ? 0 : e.slideCount
            };
            t.getPostClones = k;
            var O = function(e) {
                return 1 === e.slideCount ? 1 : T(e) + e.slideCount + k(e)
            };
            t.getTotalSlides = O;
            var C = function(e) {
                return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + M(e) ? "left" : "right" : e.targetSlide < e.currentSlide - I(e) ? "right" : "left"
            };
            t.siblingDirection = C;
            var M = function(e) {
                var t = e.slidesToShow,
                    a = e.centerMode,
                    n = e.rtl,
                    r = e.centerPadding;
                if (a) {
                    var s = (t - 1) / 2 + 1;
                    return parseInt(r) > 0 && (s += 1), n && t % 2 === 0 && (s += 1), s
                }
                return n ? 0 : t - 1
            };
            t.slidesOnRight = M;
            var I = function(e) {
                var t = e.slidesToShow,
                    a = e.centerMode,
                    n = e.rtl,
                    r = e.centerPadding;
                if (a) {
                    var s = (t - 1) / 2 + 1;
                    return parseInt(r) > 0 && (s += 1), n || t % 2 !== 0 || (s += 1), s
                }
                return n ? t - 1 : 0
            };
            t.slidesOnLeft = I;
            t.canUseDOM = function() {
                return !("undefined" === typeof window || !window.document || !window.document.createElement)
            }
        },
        838: function(e, t) {
            e.exports = {
                isFunction: function(e) {
                    return "function" === typeof e
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                each: function(e, t) {
                    for (var a = 0, n = e.length; a < n && !1 !== t(e[a], a); a++);
                }
            }
        },
        849: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return xe
            }));
            var n = a(4),
                r = a.n(n),
                s = a(95),
                i = a(17),
                l = a(143),
                o = a(73),
                c = a(25),
                d = a(0),
                u = a.n(d),
                p = a(749),
                m = a(114),
                f = a.n(m),
                b = a(42),
                h = a(182),
                g = a(54),
                y = a(769),
                v = a(755),
                E = a.n(v),
                w = a(779),
                x = a(782),
                S = a.n(x),
                N = a(9),
                T = a(99),
                k = a(18),
                O = a(726),
                C = a(976),
                M = a(1007),
                I = a(997),
                j = a(764),
                W = a(979),
                R = a(703),
                A = a(744),
                D = a(1009),
                U = a(345),
                P = a(1),
                z = a(13),
                L = (a(118), a(10), a(34)),
                _ = a(39),
                H = a(23);
            O.a.styles;
            var F = d.forwardRef((function(e, t) {
                    var a = e.children,
                        n = e.classes,
                        r = e.className,
                        s = e.color,
                        i = void 0 === s ? "default" : s,
                        l = e.component,
                        o = void 0 === l ? "div" : l,
                        c = e.disabled,
                        u = void 0 !== c && c,
                        p = e.disableElevation,
                        m = void 0 !== p && p,
                        f = e.disableFocusRipple,
                        b = void 0 !== f && f,
                        h = e.disableRipple,
                        g = void 0 !== h && h,
                        y = e.fullWidth,
                        v = void 0 !== y && y,
                        E = e.orientation,
                        w = void 0 === E ? "horizontal" : E,
                        x = e.size,
                        S = void 0 === x ? "medium" : x,
                        T = e.variant,
                        k = void 0 === T ? "outlined" : T,
                        O = Object(z.a)(e, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]),
                        C = Object(N.a)(n.grouped, n["grouped".concat(Object(L.a)(w))], n["grouped".concat(Object(L.a)(k))], n["grouped".concat(Object(L.a)(k)).concat(Object(L.a)(w))], n["grouped".concat(Object(L.a)(k)).concat("default" !== i ? Object(L.a)(i) : "")], u && n.disabled);
                    return d.createElement(o, Object(P.a)({
                        role: "group",
                        className: Object(N.a)(n.root, r, v && n.fullWidth, m && n.disableElevation, "contained" === k && n.contained, "vertical" === w && n.vertical),
                        ref: t
                    }, O), d.Children.map(a, (function(e) {
                        return d.isValidElement(e) ? d.cloneElement(e, {
                            className: Object(N.a)(C, e.props.className),
                            color: e.props.color || i,
                            disabled: e.props.disabled || u,
                            disableElevation: e.props.disableElevation || m,
                            disableFocusRipple: b,
                            disableRipple: g,
                            fullWidth: v,
                            size: e.props.size || S,
                            variant: e.props.variant || k
                        }) : null
                    })))
                })),
                q = Object(H.a)((function(e) {
                    return {
                        root: {
                            display: "inline-flex",
                            borderRadius: e.shape.borderRadius
                        },
                        contained: {
                            boxShadow: e.shadows[2]
                        },
                        disableElevation: {
                            boxShadow: "none"
                        },
                        disabled: {},
                        fullWidth: {
                            width: "100%"
                        },
                        vertical: {
                            flexDirection: "column"
                        },
                        grouped: {
                            minWidth: 40
                        },
                        groupedHorizontal: {
                            "&:not(:first-child)": {
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            },
                            "&:not(:last-child)": {
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }
                        },
                        groupedVertical: {
                            "&:not(:first-child)": {
                                borderTopRightRadius: 0,
                                borderTopLeftRadius: 0
                            },
                            "&:not(:last-child)": {
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 0
                            }
                        },
                        groupedText: {},
                        groupedTextHorizontal: {
                            "&:not(:last-child)": {
                                borderRight: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)")
                            }
                        },
                        groupedTextVertical: {
                            "&:not(:last-child)": {
                                borderBottom: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)")
                            }
                        },
                        groupedTextPrimary: {
                            "&:not(:last-child)": {
                                borderColor: Object(_.c)(e.palette.primary.main, .5)
                            }
                        },
                        groupedTextSecondary: {
                            "&:not(:last-child)": {
                                borderColor: Object(_.c)(e.palette.secondary.main, .5)
                            }
                        },
                        groupedOutlined: {},
                        groupedOutlinedHorizontal: {
                            "&:not(:first-child)": {
                                marginLeft: -1
                            },
                            "&:not(:last-child)": {
                                borderRightColor: "transparent"
                            }
                        },
                        groupedOutlinedVertical: {
                            "&:not(:first-child)": {
                                marginTop: -1
                            },
                            "&:not(:last-child)": {
                                borderBottomColor: "transparent"
                            }
                        },
                        groupedOutlinedPrimary: {
                            "&:hover": {
                                borderColor: e.palette.primary.main
                            }
                        },
                        groupedOutlinedSecondary: {
                            "&:hover": {
                                borderColor: e.palette.secondary.main
                            }
                        },
                        groupedContained: {
                            boxShadow: "none"
                        },
                        groupedContainedHorizontal: {
                            "&:not(:last-child)": {
                                borderRight: "1px solid ".concat(e.palette.grey[400]),
                                "&$disabled": {
                                    borderRight: "1px solid ".concat(e.palette.action.disabled)
                                }
                            }
                        },
                        groupedContainedVertical: {
                            "&:not(:last-child)": {
                                borderBottom: "1px solid ".concat(e.palette.grey[400]),
                                "&$disabled": {
                                    borderBottom: "1px solid ".concat(e.palette.action.disabled)
                                }
                            }
                        },
                        groupedContainedPrimary: {
                            "&:not(:last-child)": {
                                borderColor: e.palette.primary.dark
                            }
                        },
                        groupedContainedSecondary: {
                            "&:not(:last-child)": {
                                borderColor: e.palette.secondary.dark
                            }
                        }
                    }
                }), {
                    name: "MuiButtonGroup"
                })(F),
                V = a(766),
                G = a(774),
                B = a(91),
                Y = a.n(B),
                Q = a(768),
                X = a.n(Q),
                Z = a(767),
                J = a.n(Z),
                K = a(748),
                $ = a(164),
                ee = a(750),
                te = a(201),
                ae = a(129),
                ne = a(246),
                re = function(e) {
                    return e.reservation || ne.b
                },
                se = a(35),
                ie = Object(ae.b)({
                    allTransactions: Object(ae.a)(re, (function(e) {
                        return e.transactions
                    })),
                    allSupply: Object(ae.a)(re, (function(e) {
                        return e.supply
                    }))
                }),
                le = {
                    id: "app.labels.selected",
                    defaultMessage: "Selected"
                },
                oe = {
                    id: "app.labels.viewTransaction",
                    defaultMessage: "View Transaction"
                },
                ce = {
                    id: "app.labels.showReservations",
                    defaultMessage: "Latest Reservations"
                };

            function de(e) {
                var t = new Date,
                    a = Object(d.useState)(e.selectedDays),
                    n = Object(c.a)(a, 2),
                    s = n[0],
                    p = n[1],
                    m = Object(d.useState)(!1),
                    h = Object(c.a)(m, 2),
                    g = h[0],
                    y = h[1],
                    v = Object(d.useState)("1"),
                    E = Object(c.a)(v, 2),
                    w = E[0],
                    x = E[1],
                    S = Object(b.b)().chainId,
                    T = Object($.a)(parseInt(S)),
                    C = Object(U.a)(),
                    M = C.formatMessage,
                    I = function(e) {
                        w !== e && x(e)
                    },
                    j = Object(se.d)(ie),
                    W = j.allTransactions,
                    R = j.allSupply,
                    A = e.stage,
                    D = Object(d.useState)([]),
                    P = Object(c.a)(D, 2),
                    z = P[0],
                    L = P[1],
                    _ = Object(d.useState)(!1),
                    H = Object(c.a)(_, 2),
                    F = H[0],
                    B = H[1],
                    Q = Object(d.useState)([]),
                    Z = Object(c.a)(Q, 2),
                    ae = Z[0],
                    ne = Z[1],
                    re = Object(d.useState)(Object(o.a)(ee.a).filter((function(e) {
                        return s ? s.includes(e.day) : !!e.class
                    }))),
                    de = Object(c.a)(re, 2),
                    ue = de[0],
                    pe = de[1],
                    me = window.ethereum && window.ethereum.selectedAddress ? new f.a(f.a.givenProvider) : new f.a(new f.a.providers.HttpProvider(T.infuraURL)),
                    fe = new me.eth.Contract(K, T.address),
                    be = e.refetch;
                return Object(d.useEffect)((function() {
                    if (s && 1 === s.length) L(s), e.setInvestmentDay([parseInt(s)]), ne(W.filter((function(e) {
                        return parseInt(e.returnValues.investmentDay) === parseInt(s[0])
                    })).reverse()), pe(R.filter((function(e) {
                        return s.includes(e.day)
                    })));
                    else {
                        var t = function() {
                                var e = Object(l.a)(r.a.mark((function e() {
                                    var t;
                                    return r.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, fe.methods.investorsOnAllDays().call();
                                            case 3:
                                                t = e.sent, Array.isArray(t) && pe((function(e) {
                                                    return e.map((function(e, a) {
                                                        return Object(i.a)(Object(i.a)({}, e), {}, {
                                                            users: t[parseInt(e.day)]
                                                        })
                                                    }))
                                                })), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.log("investorsOnAllDays: ", e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            a = function() {
                                var e = Object(l.a)(r.a.mark((function e() {
                                    var t;
                                    return r.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, fe.methods.investmentsOnAllDays().call();
                                            case 3:
                                                t = e.sent, Array.isArray(t) && pe((function(e) {
                                                    return e.map((function(e, a) {
                                                        var n;
                                                        return Object(i.a)(Object(i.a)({}, e), {}, {
                                                            eth: parseFloat(me.utils.fromWei(null === (n = t[parseInt(e.day)]) || void 0 === n ? void 0 : n.toString(), "ether")).toFixed(2)
                                                        })
                                                    }))
                                                })), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.log("investmentsOnAllDays: ", e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                        t(), a()
                    }
                }), [be, W]), Object(d.useEffect)((function() {
                    s && 1 === s.length && pe(R.filter((function(e) {
                        return s.includes(e.day)
                    })))
                }), [R]), u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
                    className: "card-header bg-secondary p-0 px-3"
                }, ue.length > 1 && u.a.createElement("div", {
                    className: "d-flex justify-content-between align-items-center"
                }, u.a.createElement(O.a, {
                    onClick: function() {
                        if ("RESERVE AGAIN" === A || "CONFIRM TRANSACTION" === A || "APPROVING" === A || "RESERVING" === A) return !1;
                        if (!1 === F) {
                            var t = new Date,
                                a = ue.map((function(e, a) {
                                    return t > new Date(e.endUTC) ? {
                                        select: !1,
                                        day: e.day
                                    } : {
                                        select: !0,
                                        day: e.day
                                    }
                                })).filter((function(e) {
                                    return !0 === e.select
                                })).map((function(e) {
                                    return e.day
                                })),
                                n = a.map((function(e) {
                                    return parseInt(e)
                                }));
                            L(a), e.setInvestmentDay(n)
                        } else L([]), e.setInvestmentDay([]);
                        B((function(e) {
                            return !e
                        }))
                    },
                    className: "btn-neutral-primary btn-pill px-3 py-1 mx-1"
                }, u.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, u.a.createElement(k.a, {
                    icon: ["fas", "arrow-down"],
                    className: "font-size-xs"
                })), u.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, F ? "Deselect all days" : "Select all days")), u.a.createElement("div", {
                    className: "mr-3"
                }, u.a.createElement(q, {
                    variant: "text"
                }, u.a.createElement(O.a, {
                    disabled: !0,
                    className: Object(N.a)("btn-primary btn-transition-none d-40 p-0 btn-icon btn-animated-icon-xs", {
                        active: "1" === w
                    }),
                    onClick: function() {
                        I("1")
                    }
                }, u.a.createElement("span", {
                    className: "btn-wrapper--icon d-20 d-flex align-items-center justify-content-center"
                }, u.a.createElement(J.a, {
                    className: "font-size-xxl"
                }))), u.a.createElement(O.a, {
                    disabled: !0,
                    className: Object(N.a)("btn-primary light-gray-border btn-transition-none d-40 p-0 btn-icon btn-animated-icon-xs", {
                        active: "2" === w
                    }),
                    onClick: function() {
                        I("2")
                    }
                }, u.a.createElement("span", {
                    className: "btn-wrapper--icon d-20 d-flex align-items-center justify-content-center"
                }, u.a.createElement(X.a, {
                    className: "font-size-lg"
                }))))))), u.a.createElement("div", null, u.a.createElement(Y.a, {
                    className: Object(N.a)({
                        "scroll-area-md": ue.length > 1
                    }),
                    option: {
                        wheelPropagation: !1
                    }
                }, ue.map((function(a, n) {
                    return u.a.createElement("div", {
                        key: n,
                        onClick: function() {
                            return t = a.day, (!s || 1 != s.length) && "RESERVE AGAIN" !== A && "CONFIRM TRANSACTION" !== A && "APPROVING" !== A && "RESERVING" !== A && void(z.includes(t) ? (L((function(e) {
                                return e.filter((function(e) {
                                    return e !== t
                                }))
                            })), e.setInvestmentDay((function(e) {
                                return e.filter((function(e) {
                                    return e !== parseInt(t)
                                }))
                            }))) : (L((function(e) {
                                return [].concat(Object(o.a)(e), [t])
                            })), e.setInvestmentDay((function(e) {
                                return [].concat(Object(o.a)(e), [parseInt(t)])
                            }))));
                            var t
                        },
                        className: Object(N.a)("cursor-pointer", {
                            "is-selected": !0 === z.includes(a.day)
                        })
                    }, a.endUTC > Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()) && u.a.createElement(V.a, {
                        className: "card-box my-3 mx-2 mx-lg-4 border-teal-hover"
                    }, u.a.createElement("div", {
                        className: "card-indicator bg-".concat(!0 === z.includes(a.day) ? "primary" : a.class)
                    }), u.a.createElement(G.a, {
                        className: "px-3 py-3"
                    }, u.a.createElement("div", {
                        className: "pb-3 d-flex justify-content-between"
                    }, u.a.createElement("a", {
                        href: "#/",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, !0 === z.includes(a.day) && u.a.createElement("div", {
                        className: "badge badge-primary px-3 mr-1"
                    }, M(le)), u.a.createElement("div", {
                        className: "badge badge-".concat(a.class, " px-3 mr-2")
                    }, "success" === a.class ? "Fixed" : "Random"), u.a.createElement("span", {
                        className: "font-size-sm"
                    }, a.supply))), u.a.createElement("div", {
                        className: "d-flex align-items-center justify-content-start"
                    }, u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement(k.a, {
                        icon: ["far", "calendar"],
                        className: "mr-1"
                    }), C.formatDate(a.dateUTC), " - Day #", +a.day), u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement(k.a, {
                        icon: ["far", "user"],
                        className: "mr-1"
                    }), u.a.createElement("span", null, a.users)), u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement(k.a, {
                        icon: ["fab", "ethereum"],
                        className: "mr-1"
                    }), u.a.createElement("span", null, a.eth)), s && 1 === s.length && u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement(k.a, {
                        icon: ["fas", "shopping-cart"],
                        className: "mr-1"
                    }), u.a.createElement("span", null, ae.length))))), u.a.createElement("div", {
                        className: "divider"
                    }))
                }))), s && 1 === s.length && u.a.createElement("div", {
                    className: Object(N.a)("mx-2 my-2 mt-3 font-size-xs text-dark full-flex", {})
                }, u.a.createElement("a", {
                    onClick: function() {
                        p(null), pe(Object(o.a)(R).filter((function(e) {
                            return !!e.class
                        }))), e.changeHeader(), be = !0
                    }
                }, u.a.createElement(k.a, {
                    icon: ["fas", "calendar"],
                    className: "mr-2"
                }), u.a.createElement("span", null, "Show All Days")), u.a.createElement("div", {
                    className: "divider"
                })), s && 1 === s.length && u.a.createElement(Y.a, {
                    className: Object(N.a)("", {
                        "scroll-area-sm": !0 === g
                    }),
                    option: {
                        wheelPropagation: !1
                    }
                }, u.a.createElement("div", {
                    className: Object(N.a)("mx-2 my-2 font-size-xs text-dark full-flex", {
                        "d-none": !0 === g
                    })
                }, u.a.createElement("a", {
                    onClick: function() {
                        y(!0)
                    }
                }, u.a.createElement(k.a, {
                    icon: ["fas", "shopping-cart"],
                    className: "mr-2"
                }), u.a.createElement("span", null, M(ce)), u.a.createElement("span", {
                    className: "ml-1"
                }, "(", e.headerText, ")"))), ae.map((function(e, t) {
                    return u.a.createElement("div", {
                        key: t,
                        className: Object(N.a)("", {
                            "d-none": !1 === g
                        })
                    }, u.a.createElement(V.a, {
                        className: "card-box my-3 mx-2 mx-lg-4 border-teal-hover"
                    }, u.a.createElement(G.a, {
                        className: "px-3 py-3"
                    }, u.a.createElement("div", {
                        className: "aligned"
                    }, u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement(k.a, {
                        icon: ["fas", "shopping-cart"],
                        className: "mr-1"
                    }), u.a.createElement("span", null, " # ", ae.length - t)), u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "".concat(T.etherScan, "/address/").concat(e.returnValues.sender)
                    }, u.a.createElement(k.a, {
                        icon: ["far", "user"],
                        className: "mr-1"
                    }), u.a.createElement(te.a, {
                        v: e.returnValues.sender
                    }))), u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement(k.a, {
                        icon: ["fab", "ethereum"],
                        className: "mr-1"
                    }), u.a.createElement("span", null, parseFloat(me.utils.fromWei(e.returnValues.amount)).toFixed(2))), u.a.createElement("div", {
                        className: "font-size-xs text-dark px-2"
                    }, u.a.createElement("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "".concat(T.etherScan, "/tx/").concat(e.transactionHash)
                    }, u.a.createElement(k.a, {
                        icon: ["fas", "search"],
                        className: "mr-1"
                    }), u.a.createElement("span", null, M(oe))))))), t + 1 < ae.length && u.a.createElement("div", {
                        className: "divider"
                    }))
                })))))
            }
            var ue = a(240),
                pe = a(372),
                me = a(249);
            var fe = function(e) {
                    var t = Object(d.useRef)();
                    return Object(d.useEffect)((function() {
                        t.current = e
                    })), t.current
                },
                be = a(752),
                he = Object(d.lazy)((function() {
                    return a.e(7).then(a.bind(null, 936))
                })),
                ge = Object(d.lazy)((function() {
                    return a.e(3).then(a.bind(null, 847))
                })),
                ye = Object(w.a)(y.a)({
                    color: "#dc004d",
                    marginLeft: "1em"
                }),
                ve = "",
                Ee = 0,
                we = {
                    switchToRopsten: {
                        id: "app.labels.switchToRopsten",
                        defaultMessage: "SWITCH TO ROPSTEN"
                    },
                    selfReferralDetected: {
                        id: "app.labels.selfReferralDetected",
                        defaultMessage: "SELF REFERRAL DETECTED"
                    },
                    youOnlyHave: {
                        id: "app.labels.youOnlyHave",
                        defaultMessage: "You only have"
                    },
                    minimum: {
                        id: "app.labels.minimum",
                        defaultMessage: "Minimum"
                    },
                    reserveAgain: {
                        id: "app.labels.reserveAgain",
                        defaultMessage: "RESERVE AGAIN"
                    },
                    approve: {
                        id: "app.labels.approve",
                        defaultMessage: "APPROVE"
                    },
                    confirmTransaction: {
                        id: "app.labels.confirmTransaction",
                        defaultMessage: "CONFIRM TRANSACTION"
                    },
                    approving: {
                        id: "app.labels.approving",
                        defaultMessage: "APPROVING..."
                    },
                    reserving: {
                        id: "app.labels.reserving",
                        defaultMessage: "RSERVING..."
                    },
                    selectDays: {
                        id: "app.labels.selectDays",
                        defaultMessage: "select day(s)"
                    },
                    simplifiedReservation: {
                        id: "app.labels.simplifiedReservation",
                        defaultMessage: "Simplified Reservation Process"
                    },
                    allEntries: {
                        id: "app.labels.allEntries",
                        defaultMessage: "All entries"
                    },
                    viewTransaction: {
                        id: "app.labels.viewTransaction",
                        defaultMessage: "View Transaction"
                    },
                    useTeamReferral: {
                        id: "app.labels.useTeamReferral",
                        defaultMessage: "Use Team Referral Address"
                    },
                    connectWithMetamask: {
                        id: "app.labels.connectWithMetamask",
                        defaultMessage: "Connect with Metamask"
                    },
                    openDashboard: {
                        id: "app.labels.openDashboard",
                        defaultMessage: "Open Dashboard"
                    },
                    transactionCompleted: {
                        id: "app.labels.transactionCompleted",
                        defaultMessage: "Transaction Completed"
                    }
                };

            function xe(e) {
                p.a.modalview("QuickWise");
                var t = Object(d.useState)("1"),
                    a = Object(c.a)(t, 2),
                    n = a[0],
                    m = a[1],
                    y = Object(U.a)().formatMessage,
                    v = Object(b.b)(),
                    w = v.chainId,
                    x = v.account,
                    P = v.active,
                    z = Object(se.c)(),
                    L = Object(T.f)(),
                    _ = !!window.ethereum || !!window.web3,
                    H = window.ethereum ? window.ethereum.selectedAddress : null,
                    F = Object(d.useState)("ETH"),
                    q = Object(c.a)(F, 2),
                    V = q[0],
                    G = q[1],
                    B = Object(d.useState)(!0),
                    Y = Object(c.a)(B, 2),
                    Q = Y[0],
                    X = Y[1],
                    Z = Object(d.useState)([]),
                    J = Object(c.a)(Z, 2),
                    ee = J[0],
                    te = J[1],
                    ae = Object(d.useState)("0.05"),
                    ne = Object(c.a)(ae, 2),
                    re = ne[0],
                    ie = ne[1],
                    le = Object(d.useState)(e.selectedDays),
                    oe = Object(c.a)(le, 2),
                    ce = oe[0],
                    xe = (oe[1], Object(d.useState)(e.defaultText)),
                    Se = Object(c.a)(xe, 2),
                    Ne = Se[0],
                    Te = Se[1],
                    ke = Object(d.useState)(e.defaultText),
                    Oe = Object(c.a)(ke, 2),
                    Ce = Oe[0],
                    Me = Oe[1],
                    Ie = Object(d.useState)({}),
                    je = Object(c.a)(Ie, 2),
                    We = je[0],
                    Re = je[1],
                    Ae = Object(d.useState)({}),
                    De = Object(c.a)(Ae, 2),
                    Ue = De[0],
                    Pe = De[1],
                    ze = Object(d.useState)(null),
                    Le = Object(c.a)(ze, 2),
                    _e = Le[0],
                    He = Le[1],
                    Fe = Object(d.useState)(""),
                    qe = Object(c.a)(Fe, 2),
                    Ve = qe[0],
                    Ge = qe[1],
                    Be = Object(d.useState)(!1),
                    Ye = Object(c.a)(Be, 2),
                    Qe = Ye[0],
                    Xe = Ye[1],
                    Ze = Object(d.useRef)(!0),
                    Je = fe(Qe),
                    Ke = Object(pe.a)("w"),
                    $e = Object($.a)(w),
                    et = Math.floor(Math.random() * $e.teamAddresses.length),
                    tt = Object(d.useState)("" === Ke ? $e.teamAddresses[et] : Ke),
                    at = Object(c.a)(tt, 2),
                    nt = at[0],
                    rt = at[1],
                    st = new f.a(f.a.givenProvider),
                    it = new st.eth.Contract(K, $e.address),
                    lt = new st.eth.Contract(ue, $e.uniswapAddress),
                    ot = Object(d.useState)(!1),
                    ct = Object(c.a)(ot, 2),
                    dt = ct[0],
                    ut = ct[1],
                    pt = [{
                        value: "ETH",
                        label: "ETH"
                    }];
                w && g.b[w].forEach((function(e) {
                    return pt = [].concat(Object(o.a)(pt), [{
                        label: e.symbol,
                        value: e.symbol
                    }])
                })), Object(d.useEffect)((function() {
                    return function() {
                        Ze.current = !1
                    }
                }), []);
                var mt = {
                        SWITCH_TO_ROPSTEN: {
                            text: y(we.switchToRopsten),
                            disabled: !0
                        },
                        SELF_REFERRAL: {
                            text: y(we.selfReferralDetected),
                            disabled: !0
                        },
                        LESS_BALANCE: {
                            text: "".concat(y(we.youOnlyHave), " {amount} {currency}"),
                            disabled: !0
                        },
                        MINIMUM_INPUT: {
                            text: "Minimum {amount} {currency}",
                            disabled: !0
                        },
                        NORMAL: {
                            text: e.defaultText,
                            disabled: !1
                        },
                        RESERVE_AGAIN: {
                            text: y(we.reserveAgain),
                            disabled: !1
                        },
                        APPROVE: {
                            text: "".concat(y(we.approve), " {currency}"),
                            disabled: !1
                        },
                        CONFIRM_TRANSACTION: {
                            text: "".concat(y(we.confirmTransaction)),
                            disabled: !0
                        },
                        APPROVING: {
                            text: y(we.approving),
                            disabled: !0
                        },
                        RESERVING: {
                            text: y(we.reserving),
                            disabled: !0
                        },
                        SELECT_DAY: {
                            text: y(we.selectDays),
                            disabled: !0
                        }
                    },
                    ft = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        if (X(mt[e].disabled), "APPROVE" === e) {
                            var n = mt[e].text.replace("{currency}", t);
                            Te(n)
                        } else if ("LESS_BALANCE" === e || "MINIMUM_INPUT" === e) {
                            var r = mt[e].text.replace("{amount}", t);
                            r = r.replace("{currency}", a), Te(r)
                        } else Te(mt[e].text)
                    },
                    bt = function(e, t) {
                        return st.utils.toChecksumAddress(e) === st.utils.toChecksumAddress(t)
                    };
                Object(d.useEffect)((function() {
                    st.eth.net.getNetworkType((function(e, t) {
                        Ze.current && "ropsten" === t && ut(!0)
                    })), bt(nt, x) && ft("SELF_REFERRAL")
                })), Object(d.useEffect)((function() {
                    w && (g.b[w].forEach(function() {
                        var e = Object(l.a)(r.a.mark((function e(t) {
                            var a, n, l;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, a = new st.eth.Contract(t.abi, t.address), e.next = 4, a.methods.balanceOf(x).call();
                                    case 4:
                                        if (n = e.sent, l = parseFloat(Object(h.b)(n, t.decimals)), Ze.current) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        Re((function(e) {
                                            return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, "".concat(t.symbol), l))
                                        })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), console.log("token error"), console.log(e.t0);
                                    case 15:
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 11]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), st.eth.getBalance(H).then((function(e) {
                        He(st.utils.fromWei(e, "ether"))
                    })).catch((function(e) {
                        console.log("eth balance error")
                    })), e.refetch && void 0 !== Je && (z(Object(be.a)()), e.refetch()))
                }), [w, Qe, x]);
                var ht = function() {
                        var e = Object(l.a)(r.a.mark((function e(t) {
                            var a, n, l, o, c, d, u, p, m;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("ETH" === t) {
                                            e.next = 31;
                                            break
                                        }
                                        return a = g.b[w].find((function(e) {
                                            return e.symbol === t
                                        })), n = new st.eth.Contract(a.abi, a.address), e.next = 5, n.methods.balanceOf(x).call();
                                    case 5:
                                        if (l = e.sent, o = parseFloat(Object(h.b)(l, a.decimals)), c = f.a.utils.toWei("0.06", "ether"), Ze.current) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 10:
                                        if (Re((function(e) {
                                                return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, "".concat(a.symbol), o))
                                            })), 0 !== o) {
                                            e.next = 16;
                                            break
                                        }
                                        return ie("0"), G(t), Et(null), e.abrupt("return");
                                    case 16:
                                        return e.next = 19, lt.methods.getAmountsOut(c, [$e.wethAddress, a.address]).call();
                                    case 19:
                                        if (d = e.sent, Ze.current) {
                                            e.next = 22;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 22:
                                        u = d[1] / Math.pow(10, a.decimals), p = parseFloat(u), Pe((function(e) {
                                            return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, a.symbol, p))
                                        })), p = 0 === ee.length ? (Math.ceil(1e3 * p) / 1e3).toFixed(2) : (Math.ceil(ee.length * p * 1e3) / 1e3).toFixed(2), ie(p), G(t), X(!1), e.next = 35;
                                        break;
                                    case 31:
                                        st.eth.getBalance(H).then((function(e) {
                                            He(st.utils.fromWei(e, "ether"))
                                        })).catch((function(e) {
                                            console.log("eth balance error")
                                        })), G(t), m = 0 === ee.length ? .05 : (.05 * ee.length).toFixed(2), ie(m);
                                    case 35:
                                        Et(null);
                                    case 36:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    gt = Object(d.useState)(null),
                    yt = Object(c.a)(gt, 2),
                    vt = yt[0],
                    Et = yt[1],
                    wt = function() {
                        var e = Object(l.a)(r.a.mark((function e(t) {
                            var a, n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (ie(t.target.value), 0 !== ee.length) {
                                            e.next = 4;
                                            break
                                        }
                                        return ft("SELECT_DAY"), e.abrupt("return");
                                    case 4:
                                        if (!bt(nt, x)) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (a = .05 * ee.length, n = parseFloat(t.target.value), !P) {
                                            e.next = 19;
                                            break
                                        }
                                        if (!("ETH" === V && n > _e)) {
                                            e.next = 12;
                                            break
                                        }
                                        return ft("LESS_BALANCE", parseFloat(Math.floor(100 * _e) / 100).toFixed(2), V), e.abrupt("return");
                                    case 12:
                                        if (!("ETH" !== V && void 0 !== We[V] && n > We[V])) {
                                            e.next = 15;
                                            break
                                        }
                                        return ft("LESS_BALANCE", parseFloat(Math.floor(100 * We[V]) / 100).toFixed(2), V), e.abrupt("return");
                                    case 15:
                                        if (!(ee.length > 0) || "" !== t.target.value && NaN !== n) {
                                            e.next = 18;
                                            break
                                        }
                                        return "ETH" === V ? ft("MINIMUM_INPUT", Math.ceil(1e3 * a) / 1e3, V) : We[V] ? ft("MINIMUM_INPUT", Math.ceil(Ue[V] * ee.length * 100) / 100, V) : ft("LESS_BALANCE", 0, V), e.abrupt("return");
                                    case 18:
                                        "ETH" === V ? n >= 0 && n < a && Math.abs(n - a) > .001 ? ft("MINIMUM_INPUT", Math.ceil(1e3 * a) / 1e3, V) : ft("NORMAL") : n < Ue[V] * ee.length && Math.abs(n - Ue[V] * ee.length) > .001 ? ft("MINIMUM_INPUT", Math.ceil(Ue[V] * ee.length * 100) / 100, V) : "APPROVE" === Ce ? ft("APPROVE", V) : ft("NORMAL");
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(d.useEffect)((function() {
                    if (!bt(nt, x))
                        if (0 !== ee.length) {
                            if ("RESERVE AGAIN" !== Ce && null !== _e) {
                                var t = .05 * ee.length;
                                if ("ETH" === V) parseFloat(re) - _e > .001 ? ft("LESS_BALANCE", (Math.floor(100 * _e) / 100).toFixed(2), V) : "" === re || parseFloat(re) < t && Math.abs(parseFloat(re) - t) > .001 ? ft("MINIMUM_INPUT", Math.ceil(1e3 * t) / 1e3, V) : ft("NORMAL");
                                else {
                                    if (!We[V]) return void ft("LESS_BALANCE", 0, V);
                                    parseFloat(re) - We[V] > .001 ? ft("LESS_BALANCE", parseFloat(We[V]).toFixed(2), V) : "" === re || parseFloat(re) < Ue[V] * ee.length && Math.abs(parseFloat(re) - Ue[V] * ee.length) > .001 ? ft("MINIMUM_INPUT", Math.ceil(Ue[V] * ee.length * 100) / 100, V) : ft("APPROVE" === Ce ? "APPROVE" : "NORMAL")
                                }
                            }
                        } else {
                            if (e.selectedDays && 1 == e.selectedDays.length) return;
                            ft("SELECT_DAY")
                        }
                }), [ee, V, _e, We, Ce]), Object(d.useEffect)((function() {
                    if (!bt(nt, x) && "RESERVE AGAIN" !== Ce && "ETH" !== V) {
                        if (!We[V]) return void ft("LESS_BALANCE", "0", V);
                        var t = g.b[w].find((function(e) {
                            return e.symbol === V
                        }));
                        new st.eth.Contract(t.abi, t.address).methods.allowance(H, $e.address).call().then((function(t) {
                            Ze.current && ("0" === t ? (Me("APPROVE"), ft("APPROVE", V)) : (Me(e.defaultText), Te(e.defaultText)))
                        })).catch((function(e) {}))
                    }
                }), [V, Ce, w]), Object(d.useEffect)((function() {
                    z("RESERVE AGAIN" === Ce ? Object(be.d)() : Object(be.c)())
                }), [Ce]);
                var xt = Object(d.useState)(!1),
                    St = Object(c.a)(xt, 2),
                    Nt = St[0],
                    Tt = St[1],
                    kt = function() {
                        var t = Object(l.a)(r.a.mark((function t() {
                            var a, n, s, i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        a = Ne, "RESERVE AGAIN" === Ce && ("ETH" === V ? ft("NORMAL") : ft("APPROVE", V), Me("APPROVE"), Ge(""));
                                        try {
                                            Ne === e.defaultText && (ft("CONFIRM_TRANSACTION"), ve = "", Ee = 0, "ETH" === V ? it.methods.reserveWise(ee, nt).send({
                                                from: H,
                                                value: f.a.utils.toWei(re, "ether")
                                            }).on("transactionHash", (function(e) {
                                                Ze.current && (Ge(e), ft("RESERVING"), ve = e)
                                            })).on("confirmation", (function(e, t) {
                                                t.transactionHash === ve && Ee++, Ze.current && 1 === Ee && (ft("RESERVE_AGAIN"), Me("RESERVE AGAIN"), Xe((function(e) {
                                                    return !e
                                                })), p.a.event({
                                                    category: "User",
                                                    action: "Reservation",
                                                    label: "".concat(dt ? "Ropsten" : "Mainnet", " ETH"),
                                                    value: parseFloat(re)
                                                }))
                                            })).on("receipt", (function(e) {})).on("error", (function(e) {
                                                Ze.current && (ft("NORMAL"), Ge(""))
                                            })) : (n = g.b[w].find((function(e) {
                                                return e.symbol === V
                                            })), it.methods.reserveWiseWithToken(n.address, (re * Math.pow(10, n.decimals)).toString(), ee, nt).send({
                                                from: H
                                            }).on("transactionHash", (function(e) {
                                                Ze.current && (Ge(e), Te("Reserving..."), ve = e)
                                            })).on("confirmation", (function(e, t) {
                                                t.transactionHash === ve && Ee++, Ze.current && 1 === Ee && (Me("RESERVE AGAIN"), ft("RESERVE_AGAIN"), Xe((function(e) {
                                                    return !e
                                                })), p.a.event({
                                                    category: "User",
                                                    action: "Reservation",
                                                    label: "".concat(dt ? "Ropsten" : "Mainnet", " ").concat(st.utils.toHex(n.address)),
                                                    value: parseFloat(re)
                                                }))
                                            })).on("receipt", (function(e) {})).on("error", (function(e) {
                                                Ze.current && (Me("APPROVE"), ft("APPROVE", V), Ge("")), console.log(e)
                                            })))), Ne === "APPROVE ".concat(V) && (s = g.b[w].find((function(e) {
                                                return e.symbol === V
                                            })), i = new st.eth.Contract(s.abi, s.address), ft("APPROVING"), "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", i.methods.approve($e.address, f.a.utils.toBN("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({
                                                from: H
                                            }).on("transactionHash", (function(e) {
                                                Ze.current && (Ge(e), ve = e)
                                            })).on("confirmation", (function(t, a) {
                                                Ze.current && 0 === t && (Me(e.defaultText), ft("NORMAL"), Xe((function(e) {
                                                    return !e
                                                })))
                                            })).on("receipt", (function(e) {
                                                console.log("receipt")
                                            })).on("error", (function(e) {
                                                Ze.current && (Me("APPROVE"), ft("APPROVE", V))
                                            })))
                                        } catch (r) {
                                            Te(a)
                                        }
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
                    className: "text-center py-2 bg-white rounded"
                }, u.a.createElement("div", {
                    className: "card-header d-flex align-items-center justify-content-center card-header-alt p-4"
                }, u.a.createElement("div", {
                    className: "card-tr-actions"
                }, u.a.createElement("a", {
                    href: "/docs#sec-2-2-1",
                    target: "_blank"
                }, u.a.createElement(O.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, u.a.createElement(k.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))), e.toggle ? u.a.createElement("div", {
                    className: "card-lr-actions"
                }, u.a.createElement(O.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    onClick: function() {
                        e.toggle(), z(Object(be.c)())
                    },
                    variant: "outlined"
                }, u.a.createElement(S.a, {
                    fontSize: "small"
                }))) : null, u.a.createElement("div", null, u.a.createElement("h6", {
                    className: "font-weight-bold font-size-lg mb-0 text-black"
                }, e.headerText), u.a.createElement("p", {
                    className: "text-black-50 mb-0 hidden"
                }, y(we.simplifiedReservation)))), u.a.createElement(C.a, {
                    size: "small",
                    variant: "outlined",
                    className: "w-90 hidden mx-3"
                }, u.a.createElement(M.a, {
                    id: "select-entries-label"
                }, "Entries"), u.a.createElement(I.a, {
                    labelId: "select-entries-label",
                    id: "select-entries",
                    value: n,
                    onChange: function(e) {
                        m(e.target.value)
                    },
                    label: "Entries"
                }, u.a.createElement(j.a, {
                    className: "mx-2",
                    value: 1
                }, y(we.allEntries)), u.a.createElement(j.a, {
                    className: "mx-2",
                    value: 10
                }, "10"), u.a.createElement(j.a, {
                    className: "mx-2",
                    value: 15
                }, "15"), u.a.createElement(j.a, {
                    className: "mx-2",
                    value: 20
                }, "20"), u.a.createElement(j.a, {
                    className: "mx-2",
                    value: 25
                }, "25"), u.a.createElement(j.a, {
                    className: "mx-2",
                    value: 30
                }, "30"))), u.a.createElement("div", {
                    className: "divider"
                }), u.a.createElement("div", null, u.a.createElement(de, {
                    headerText: e.headerText,
                    setPayableAmount: ie,
                    setInvestmentDay: te,
                    selectedDays: ce,
                    refetch: Qe,
                    changeHeader: function() {
                        e.changeHeader()
                    }
                })), u.a.createElement("div", {
                    className: "divider"
                }), u.a.createElement("div", {
                    className: "p-3"
                }, u.a.createElement("div", {
                    className: "d-block d-md-flex align-items-center justify-content-center"
                }, u.a.createElement(C.a, {
                    variant: "outlined",
                    fullWidth: !0
                }, u.a.createElement(D.a, {
                    value: re,
                    onChange: wt,
                    classes: {
                        input: "font-size-lg font-weight-bold p-3 px-4 h-auto",
                        notchedOutline: "border-2"
                    },
                    endAdornment: u.a.createElement(W.a, {
                        position: "end"
                    }, u.a.createElement(O.a, {
                        onClick: function(e) {
                            Et(e.currentTarget)
                        },
                        size: "small",
                        className: "btn-neutral-dark d-flex align-items-center"
                    }, u.a.createElement("span", {
                        className: "btn-wrapper--label"
                    }, V), u.a.createElement("span", {
                        className: "btn-wrapper--icon d-flex"
                    }, u.a.createElement(k.a, {
                        icon: ["fas", "chevron-down"],
                        className: "opacity-8 font-size-xs ml-1"
                    }))), u.a.createElement(R.a, {
                        anchorEl: vt,
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: "center",
                            horizontal: "center"
                        },
                        transformOrigin: {
                            vertical: "center",
                            horizontal: "center"
                        },
                        onChange: ht,
                        open: Boolean(vt),
                        classes: {
                            list: "p-0"
                        },
                        onClose: function() {
                            Et(null)
                        }
                    }, pt.map((function(e) {
                        return u.a.createElement(j.a, {
                            key: e.value,
                            onClick: function() {
                                return ht(e.value)
                            }
                        }, e.label)
                    })))),
                    labelWidth: 0
                })))), u.a.createElement("div", {
                    className: "divider"
                }), u.a.createElement("div", {
                    className: "card-footer bg-secondary p-3 text-center"
                }, _ && H && u.a.createElement(u.a.Fragment, null, u.a.createElement(O.a, {
                    disabled: Q,
                    onClick: kt,
                    size: "large",
                    className: Object(N.a)("py-2 px-4 btn-primary w-100", {
                        "btn-hover-wise": "RESERVE AGAIN" !== Ce,
                        "btn-teal": "RESERVE AGAIN" === Ce,
                        "background-blue-hover": "RESERVE AGAIN" === Ce
                    })
                }, u.a.createElement("span", {
                    className: "text-uppercase font-weight-bold"
                }, Ne), Ne === y(we.reserving) || Ne === y(we.approving) ? u.a.createElement(ye, {
                    size: 20
                }) : null), "RESERVE AGAIN" === Ce && u.a.createElement(O.a, {
                    onClick: function() {
                        L.push("/personal")
                    },
                    size: "large",
                    className: Object(N.a)("py-2 px-4 btn-primary w-100 btn-hover-wise mt-2")
                }, u.a.createElement("span", {
                    className: "text-uppercase font-weight-bold"
                }, y(we.openDashboard))), Ve ? u.a.createElement("div", {
                    className: "mt-3"
                }, u.a.createElement("a", {
                    href: "".concat($e.etherScan, "/tx/").concat(Ve),
                    target: "_blank"
                }, y("RESERVE AGAIN" === Ce ? we.transactionCompleted : we.viewTransaction), " ", u.a.createElement(E.a, null))) : null, bt(nt, x) ? u.a.createElement(O.a, {
                    size: "large",
                    className: "py-2 px-4 btn-teal w-100"
                }, u.a.createElement("a", {
                    href: "/#",
                    className: "text-white text-uppercase font-weight-bold",
                    onClick: function(e) {
                        e.preventDefault(), Object(me.a)($e.teamAddresses[et]), rt($e.teamAddresses[et]), Xe((function(e) {
                            return !e
                        }))
                    }
                }, y(we.useTeamReferral))) : null), !_ && u.a.createElement(O.a, {
                    size: "large",
                    className: "py-2 px-4 btn-warning w-100"
                }, u.a.createElement("span", {
                    className: "text-uppercase font-weight-bold"
                }, y(we.connectWithMetamask))), _ && !H && u.a.createElement("div", {
                    className: "btn-w-100"
                }, u.a.createElement(d.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, u.a.createElement(he, null))))), u.a.createElement(A.a, {
                    open: Nt,
                    onClose: function() {
                        Tt(!Nt)
                    },
                    classes: {
                        paper: "shadow-lg rounded"
                    }
                }, u.a.createElement(d.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, u.a.createElement(ge, null))))
            }
        },
        860: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/wise-foundation.b703311c.svg"
        },
        861: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/card.93011745.jpg"
        },
        862: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/liquidity-transformer.5e1e2eab.svg"
        },
        863: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/oracle.71d5324a.svg"
        },
        864: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/bat.e182f34e.svg"
        },
        865: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/mkr.d28b4fcd.svg"
        },
        866: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/dai.8c0171d7.svg"
        },
        867: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/zrx.a4944d8d.svg"
        },
        868: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/lrc.23a2a9dd.svg"
        },
        869: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/knc.1cffda73.svg"
        },
        870: function(e, t, a) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = ((n = a(871)) && n.__esModule ? n : {
                default: n
            }).default;
            t.default = r
        },
        871: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(a(0)),
                r = a(872),
                s = o(a(879)),
                i = o(a(881)),
                l = a(791);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(a, !0).forEach((function(t) {
                        g(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : u(a).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function m(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var y = (0, l.canUseDOM)() && a(882),
                v = function(e) {
                    function t(e) {
                        var a;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), a = function(e, t) {
                            return !t || "object" !== c(t) && "function" !== typeof t ? b(e) : t
                        }(this, f(t).call(this, e)), g(b(a), "innerSliderRefHandler", (function(e) {
                            return a.innerSlider = e
                        })), g(b(a), "slickPrev", (function() {
                            return a.innerSlider.slickPrev()
                        })), g(b(a), "slickNext", (function() {
                            return a.innerSlider.slickNext()
                        })), g(b(a), "slickGoTo", (function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return a.innerSlider.slickGoTo(e, t)
                        })), g(b(a), "slickPause", (function() {
                            return a.innerSlider.pause("paused")
                        })), g(b(a), "slickPlay", (function() {
                            return a.innerSlider.autoPlay("play")
                        })), a.state = {
                            breakpoint: null
                        }, a._responsiveMediaHandlers = [], a
                    }
                    var a, o, u;
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && h(e, t)
                    }(t, e), a = t, (o = [{
                        key: "media",
                        value: function(e, t) {
                            y.register(e, t), this._responsiveMediaHandlers.push({
                                query: e,
                                handler: t
                            })
                        }
                    }, {
                        key: "UNSAFE_componentWillMount",
                        value: function() {
                            var e = this;
                            if (this.props.responsive) {
                                var t = this.props.responsive.map((function(e) {
                                    return e.breakpoint
                                }));
                                t.sort((function(e, t) {
                                    return e - t
                                })), t.forEach((function(a, n) {
                                    var r;
                                    r = 0 === n ? (0, s.default)({
                                        minWidth: 0,
                                        maxWidth: a
                                    }) : (0, s.default)({
                                        minWidth: t[n - 1] + 1,
                                        maxWidth: a
                                    }), (0, l.canUseDOM)() && e.media(r, (function() {
                                        e.setState({
                                            breakpoint: a
                                        })
                                    }))
                                }));
                                var a = (0, s.default)({
                                    minWidth: t.slice(-1)[0]
                                });
                                (0, l.canUseDOM)() && this.media(a, (function() {
                                    e.setState({
                                        breakpoint: null
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._responsiveMediaHandlers.forEach((function(e) {
                                y.unregister(e.query, e.handler)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this;
                            (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter((function(e) {
                                return e.breakpoint === a.state.breakpoint
                            })))[0].settings ? "unslick" : p({}, i.default, {}, this.props, {}, t[0].settings) : p({}, i.default, {}, this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                            var s = n.default.Children.toArray(this.props.children);
                            s = s.filter((function(e) {
                                return "string" === typeof e ? !!e.trim() : !!e
                            })), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                            for (var l = [], o = null, c = 0; c < s.length; c += e.rows * e.slidesPerRow) {
                                for (var u = [], m = c; m < c + e.rows * e.slidesPerRow; m += e.slidesPerRow) {
                                    for (var f = [], b = m; b < m + e.slidesPerRow && (e.variableWidth && s[b].props.style && (o = s[b].props.style.width), !(b >= s.length)); b += 1) f.push(n.default.cloneElement(s[b], {
                                        key: 100 * c + 10 * m + b,
                                        tabIndex: -1,
                                        style: {
                                            width: "".concat(100 / e.slidesPerRow, "%"),
                                            display: "inline-block"
                                        }
                                    }));
                                    u.push(n.default.createElement("div", {
                                        key: 10 * c + m
                                    }, f))
                                }
                                e.variableWidth ? l.push(n.default.createElement("div", {
                                    key: c,
                                    style: {
                                        width: o
                                    }
                                }, u)) : l.push(n.default.createElement("div", {
                                    key: c
                                }, u))
                            }
                            if ("unslick" === e) {
                                var h = "regular slider " + (this.props.className || "");
                                return n.default.createElement("div", {
                                    className: h
                                }, s)
                            }
                            return l.length <= e.slidesToShow && (e.unslick = !0), n.default.createElement(r.InnerSlider, d({
                                style: this.props.style,
                                ref: this.innerSliderRefHandler
                            }, e), l)
                        }
                    }]) && m(a.prototype, o), u && m(a, u), t
                }(n.default.Component);
            t.default = v
        },
        872: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InnerSlider = void 0;
            var n = m(a(0)),
                r = m(a(28)),
                s = m(a(873)),
                i = m(a(874)),
                l = m(a(757)),
                o = a(791),
                c = a(875),
                d = a(876),
                u = a(877),
                p = m(a(878));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f() {
                return (f = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function b(e, t) {
                if (null == e) return {};
                var a, n, r = function(e, t) {
                    if (null == e) return {};
                    var a, n, r = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) a = s[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) a = s[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }

            function h(e) {
                return (h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(a, !0).forEach((function(t) {
                        x(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : g(a).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function x(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var S = function(e) {
                function t(e) {
                    var a;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), a = function(e, t) {
                        return !t || "object" !== h(t) && "function" !== typeof t ? E(e) : t
                    }(this, v(t).call(this, e)), x(E(a), "listRefHandler", (function(e) {
                        return a.list = e
                    })), x(E(a), "trackRefHandler", (function(e) {
                        return a.track = e
                    })), x(E(a), "adaptHeight", (function() {
                        if (a.props.adaptiveHeight && a.list) {
                            var e = a.list.querySelector('[data-index="'.concat(a.state.currentSlide, '"]'));
                            a.list.style.height = (0, o.getHeight)(e) + "px"
                        }
                    })), x(E(a), "UNSAFE_componentWillMount", (function() {
                        if (a.ssrInit(), a.props.onInit && a.props.onInit(), a.props.lazyLoad) {
                            var e = (0, o.getOnDemandLazySlides)(y({}, a.props, {}, a.state));
                            e.length > 0 && (a.setState((function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), a.props.onLazyLoad && a.props.onLazyLoad(e))
                        }
                    })), x(E(a), "componentDidMount", (function() {
                        var e = y({
                            listRef: a.list,
                            trackRef: a.track
                        }, a.props);
                        a.updateState(e, !0, (function() {
                            a.adaptHeight(), a.props.autoplay && a.autoPlay("update")
                        })), "progressive" === a.props.lazyLoad && (a.lazyLoadTimer = setInterval(a.progressiveLazyLoad, 1e3)), a.ro = new p.default((function() {
                            a.state.animating ? (a.onWindowResized(!1), a.callbackTimers.push(setTimeout((function() {
                                return a.onWindowResized()
                            }), a.props.speed))) : a.onWindowResized()
                        })), a.ro.observe(a.list), Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), (function(e) {
                            e.onfocus = a.props.pauseOnFocus ? a.onSlideFocus : null, e.onblur = a.props.pauseOnFocus ? a.onSlideBlur : null
                        })), window.addEventListener ? window.addEventListener("resize", a.onWindowResized) : window.attachEvent("onresize", a.onWindowResized)
                    })), x(E(a), "componentWillUnmount", (function() {
                        a.animationEndCallback && clearTimeout(a.animationEndCallback), a.lazyLoadTimer && clearInterval(a.lazyLoadTimer), a.callbackTimers.length && (a.callbackTimers.forEach((function(e) {
                            return clearTimeout(e)
                        })), a.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", a.onWindowResized) : window.detachEvent("onresize", a.onWindowResized), a.autoplayTimer && clearInterval(a.autoplayTimer)
                    })), x(E(a), "UNSAFE_componentWillReceiveProps", (function(e) {
                        for (var t = y({
                                listRef: a.list,
                                trackRef: a.track
                            }, e, {}, a.state), r = !1, s = 0, i = Object.keys(a.props); s < i.length; s++) {
                            var l = i[s];
                            if (!e.hasOwnProperty(l)) {
                                r = !0;
                                break
                            }
                            if ("object" !== h(e[l]) && "function" !== typeof e[l] && e[l] !== a.props[l]) {
                                r = !0;
                                break
                            }
                        }
                        a.updateState(t, r, (function() {
                            a.state.currentSlide >= n.default.Children.count(e.children) && a.changeSlide({
                                message: "index",
                                index: n.default.Children.count(e.children) - e.slidesToShow,
                                currentSlide: a.state.currentSlide
                            }), e.autoplay ? a.autoPlay("update") : a.pause("paused")
                        }))
                    })), x(E(a), "componentDidUpdate", (function() {
                        if (a.checkImagesLoad(), a.props.onReInit && a.props.onReInit(), a.props.lazyLoad) {
                            var e = (0, o.getOnDemandLazySlides)(y({}, a.props, {}, a.state));
                            e.length > 0 && (a.setState((function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), a.props.onLazyLoad && a.props.onLazyLoad(e))
                        }
                        a.adaptHeight()
                    })), x(E(a), "onWindowResized", (function(e) {
                        a.debouncedResize && a.debouncedResize.cancel(), a.debouncedResize = (0, i.default)((function() {
                            return a.resizeWindow(e)
                        }), 50), a.debouncedResize()
                    })), x(E(a), "resizeWindow", (function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (r.default.findDOMNode(a.track)) {
                            var t = y({
                                listRef: a.list,
                                trackRef: a.track
                            }, a.props, {}, a.state);
                            a.updateState(t, e, (function() {
                                a.props.autoplay ? a.autoPlay("update") : a.pause("paused")
                            })), a.setState({
                                animating: !1
                            }), clearTimeout(a.animationEndCallback), delete a.animationEndCallback
                        }
                    })), x(E(a), "updateState", (function(e, t, r) {
                        var s = (0, o.initializedState)(e);
                        e = y({}, e, {}, s, {
                            slideIndex: s.currentSlide
                        }), e = y({}, e, {
                            left: (0, o.getTrackLeft)(e)
                        });
                        var i = (0, o.getTrackCSS)(e);
                        (t || n.default.Children.count(a.props.children) !== n.default.Children.count(e.children)) && (s.trackStyle = i), a.setState(s, r)
                    })), x(E(a), "ssrInit", (function() {
                        if (a.props.variableWidth) {
                            var e = 0,
                                t = 0,
                                r = [],
                                s = (0, o.getPreClones)(y({}, a.props, {}, a.state, {
                                    slideCount: a.props.children.length
                                })),
                                i = (0, o.getPostClones)(y({}, a.props, {}, a.state, {
                                    slideCount: a.props.children.length
                                }));
                            a.props.children.forEach((function(t) {
                                r.push(t.props.style.width), e += t.props.style.width
                            }));
                            for (var l = 0; l < s; l++) t += r[r.length - 1 - l], e += r[r.length - 1 - l];
                            for (var c = 0; c < i; c++) e += r[c];
                            for (var d = 0; d < a.state.currentSlide; d++) t += r[d];
                            var u = {
                                width: e + "px",
                                left: -t + "px"
                            };
                            if (a.props.centerMode) {
                                var p = "".concat(r[a.state.currentSlide], "px");
                                u.left = "calc(".concat(u.left, " + (100% - ").concat(p, ") / 2 ) ")
                            }
                            a.setState({
                                trackStyle: u
                            })
                        } else {
                            var m = n.default.Children.count(a.props.children),
                                f = y({}, a.props, {}, a.state, {
                                    slideCount: m
                                }),
                                b = (0, o.getPreClones)(f) + (0, o.getPostClones)(f) + m,
                                h = 100 / a.props.slidesToShow * b,
                                g = 100 / b,
                                v = -g * ((0, o.getPreClones)(f) + a.state.currentSlide) * h / 100;
                            a.props.centerMode && (v += (100 - g * h / 100) / 2);
                            var E = {
                                width: h + "%",
                                left: v + "%"
                            };
                            a.setState({
                                slideWidth: g + "%",
                                trackStyle: E
                            })
                        }
                    })), x(E(a), "checkImagesLoad", (function() {
                        var e = document.querySelectorAll(".slick-slide img"),
                            t = e.length,
                            n = 0;
                        Array.prototype.forEach.call(e, (function(e) {
                            var r = function() {
                                return ++n && n >= t && a.onWindowResized()
                            };
                            if (e.onclick) {
                                var s = e.onclick;
                                e.onclick = function() {
                                    s(), e.parentNode.focus()
                                }
                            } else e.onclick = function() {
                                return e.parentNode.focus()
                            };
                            e.onload || (a.props.lazyLoad ? e.onload = function() {
                                a.adaptHeight(), a.callbackTimers.push(setTimeout(a.onWindowResized, a.props.speed))
                            } : (e.onload = r, e.onerror = function() {
                                r(), a.props.onLazyLoadError && a.props.onLazyLoadError()
                            }))
                        }))
                    })), x(E(a), "progressiveLazyLoad", (function() {
                        for (var e = [], t = y({}, a.props, {}, a.state), n = a.state.currentSlide; n < a.state.slideCount + (0, o.getPostClones)(t); n++)
                            if (a.state.lazyLoadedList.indexOf(n) < 0) {
                                e.push(n);
                                break
                            }
                        for (var r = a.state.currentSlide - 1; r >= -(0, o.getPreClones)(t); r--)
                            if (a.state.lazyLoadedList.indexOf(r) < 0) {
                                e.push(r);
                                break
                            }
                        e.length > 0 ? (a.setState((function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        })), a.props.onLazyLoad && a.props.onLazyLoad(e)) : a.lazyLoadTimer && (clearInterval(a.lazyLoadTimer), delete a.lazyLoadTimer)
                    })), x(E(a), "slideHandler", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = a.props,
                            r = n.asNavFor,
                            s = n.beforeChange,
                            i = n.onLazyLoad,
                            l = n.speed,
                            c = n.afterChange,
                            d = a.state.currentSlide,
                            u = (0, o.slideHandler)(y({
                                index: e
                            }, a.props, {}, a.state, {
                                trackRef: a.track,
                                useCSS: a.props.useCSS && !t
                            })),
                            p = u.state,
                            m = u.nextState;
                        if (p) {
                            s && s(d, p.currentSlide);
                            var f = p.lazyLoadedList.filter((function(e) {
                                return a.state.lazyLoadedList.indexOf(e) < 0
                            }));
                            i && f.length > 0 && i(f), a.setState(p, (function() {
                                r && r.innerSlider.slideHandler(e), m && (a.animationEndCallback = setTimeout((function() {
                                    var e = m.animating,
                                        t = b(m, ["animating"]);
                                    a.setState(t, (function() {
                                        a.callbackTimers.push(setTimeout((function() {
                                            return a.setState({
                                                animating: e
                                            })
                                        }), 10)), c && c(p.currentSlide), delete a.animationEndCallback
                                    }))
                                }), l))
                            }))
                        }
                    })), x(E(a), "changeSlide", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = y({}, a.props, {}, a.state),
                            r = (0, o.changeSlide)(n, e);
                        (0 === r || r) && (!0 === t ? a.slideHandler(r, t) : a.slideHandler(r))
                    })), x(E(a), "clickHandler", (function(e) {
                        !1 === a.clickable && (e.stopPropagation(), e.preventDefault()), a.clickable = !0
                    })), x(E(a), "keyHandler", (function(e) {
                        var t = (0, o.keyHandler)(e, a.props.accessibility, a.props.rtl);
                        "" !== t && a.changeSlide({
                            message: t
                        })
                    })), x(E(a), "selectHandler", (function(e) {
                        a.changeSlide(e)
                    })), x(E(a), "disableBodyScroll", (function() {
                        window.ontouchmove = function(e) {
                            (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                        }
                    })), x(E(a), "enableBodyScroll", (function() {
                        window.ontouchmove = null
                    })), x(E(a), "swipeStart", (function(e) {
                        a.props.verticalSwiping && a.disableBodyScroll();
                        var t = (0, o.swipeStart)(e, a.props.swipe, a.props.draggable);
                        "" !== t && a.setState(t)
                    })), x(E(a), "swipeMove", (function(e) {
                        var t = (0, o.swipeMove)(e, y({}, a.props, {}, a.state, {
                            trackRef: a.track,
                            listRef: a.list,
                            slideIndex: a.state.currentSlide
                        }));
                        t && (t.swiping && (a.clickable = !1), a.setState(t))
                    })), x(E(a), "swipeEnd", (function(e) {
                        var t = (0, o.swipeEnd)(e, y({}, a.props, {}, a.state, {
                            trackRef: a.track,
                            listRef: a.list,
                            slideIndex: a.state.currentSlide
                        }));
                        if (t) {
                            var n = t.triggerSlideHandler;
                            delete t.triggerSlideHandler, a.setState(t), void 0 !== n && (a.slideHandler(n), a.props.verticalSwiping && a.enableBodyScroll())
                        }
                    })), x(E(a), "slickPrev", (function() {
                        a.callbackTimers.push(setTimeout((function() {
                            return a.changeSlide({
                                message: "previous"
                            })
                        }), 0))
                    })), x(E(a), "slickNext", (function() {
                        a.callbackTimers.push(setTimeout((function() {
                            return a.changeSlide({
                                message: "next"
                            })
                        }), 0))
                    })), x(E(a), "slickGoTo", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (e = Number(e), isNaN(e)) return "";
                        a.callbackTimers.push(setTimeout((function() {
                            return a.changeSlide({
                                message: "index",
                                index: e,
                                currentSlide: a.state.currentSlide
                            }, t)
                        }), 0))
                    })), x(E(a), "play", (function() {
                        var e;
                        if (a.props.rtl) e = a.state.currentSlide - a.props.slidesToScroll;
                        else {
                            if (!(0, o.canGoNext)(y({}, a.props, {}, a.state))) return !1;
                            e = a.state.currentSlide + a.props.slidesToScroll
                        }
                        a.slideHandler(e)
                    })), x(E(a), "autoPlay", (function(e) {
                        a.autoplayTimer && clearInterval(a.autoplayTimer);
                        var t = a.state.autoplaying;
                        if ("update" === e) {
                            if ("hovered" === t || "focused" === t || "paused" === t) return
                        } else if ("leave" === e) {
                            if ("paused" === t || "focused" === t) return
                        } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                        a.autoplayTimer = setInterval(a.play, a.props.autoplaySpeed + 50), a.setState({
                            autoplaying: "playing"
                        })
                    })), x(E(a), "pause", (function(e) {
                        a.autoplayTimer && (clearInterval(a.autoplayTimer), a.autoplayTimer = null);
                        var t = a.state.autoplaying;
                        "paused" === e ? a.setState({
                            autoplaying: "paused"
                        }) : "focused" === e ? "hovered" !== t && "playing" !== t || a.setState({
                            autoplaying: "focused"
                        }) : "playing" === t && a.setState({
                            autoplaying: "hovered"
                        })
                    })), x(E(a), "onDotsOver", (function() {
                        return a.props.autoplay && a.pause("hovered")
                    })), x(E(a), "onDotsLeave", (function() {
                        return a.props.autoplay && "hovered" === a.state.autoplaying && a.autoPlay("leave")
                    })), x(E(a), "onTrackOver", (function() {
                        return a.props.autoplay && a.pause("hovered")
                    })), x(E(a), "onTrackLeave", (function() {
                        return a.props.autoplay && "hovered" === a.state.autoplaying && a.autoPlay("leave")
                    })), x(E(a), "onSlideFocus", (function() {
                        return a.props.autoplay && a.pause("focused")
                    })), x(E(a), "onSlideBlur", (function() {
                        return a.props.autoplay && "focused" === a.state.autoplaying && a.autoPlay("blur")
                    })), x(E(a), "render", (function() {
                        var e, t, r, s = (0, l.default)("slick-slider", a.props.className, {
                                "slick-vertical": a.props.vertical,
                                "slick-initialized": !0
                            }),
                            i = y({}, a.props, {}, a.state),
                            p = (0, o.extractObject)(i, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]),
                            m = a.props.pauseOnHover;
                        if (p = y({}, p, {
                                onMouseEnter: m ? a.onTrackOver : null,
                                onMouseLeave: m ? a.onTrackLeave : null,
                                onMouseOver: m ? a.onTrackOver : null,
                                focusOnSelect: a.props.focusOnSelect ? a.selectHandler : null
                            }), !0 === a.props.dots && a.state.slideCount >= a.props.slidesToShow) {
                            var b = (0, o.extractObject)(i, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                                h = a.props.pauseOnDotsHover;
                            b = y({}, b, {
                                clickHandler: a.changeSlide,
                                onMouseEnter: h ? a.onDotsLeave : null,
                                onMouseOver: h ? a.onDotsOver : null,
                                onMouseLeave: h ? a.onDotsLeave : null
                            }), e = n.default.createElement(d.Dots, b)
                        }
                        var g = (0, o.extractObject)(i, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                        g.clickHandler = a.changeSlide, a.props.arrows && (t = n.default.createElement(u.PrevArrow, g), r = n.default.createElement(u.NextArrow, g));
                        var v = null;
                        a.props.vertical && (v = {
                            height: a.state.listHeight
                        });
                        var E = null;
                        !1 === a.props.vertical ? !0 === a.props.centerMode && (E = {
                            padding: "0px " + a.props.centerPadding
                        }) : !0 === a.props.centerMode && (E = {
                            padding: a.props.centerPadding + " 0px"
                        });
                        var w = y({}, v, {}, E),
                            x = a.props.touchMove,
                            S = {
                                className: "slick-list",
                                style: w,
                                onClick: a.clickHandler,
                                onMouseDown: x ? a.swipeStart : null,
                                onMouseMove: a.state.dragging && x ? a.swipeMove : null,
                                onMouseUp: x ? a.swipeEnd : null,
                                onMouseLeave: a.state.dragging && x ? a.swipeEnd : null,
                                onTouchStart: x ? a.swipeStart : null,
                                onTouchMove: a.state.dragging && x ? a.swipeMove : null,
                                onTouchEnd: x ? a.swipeEnd : null,
                                onTouchCancel: a.state.dragging && x ? a.swipeEnd : null,
                                onKeyDown: a.props.accessibility ? a.keyHandler : null
                            },
                            N = {
                                className: s,
                                dir: a.props.rtl ? "rtl" : "ltr",
                                style: a.props.style
                            };
                        return a.props.unslick && (S = {
                            className: "slick-list"
                        }, N = {
                            className: s
                        }), n.default.createElement("div", N, a.props.unslick ? "" : t, n.default.createElement("div", f({
                            ref: a.listRefHandler
                        }, S), n.default.createElement(c.Track, f({
                            ref: a.trackRefHandler
                        }, p), a.props.children)), a.props.unslick ? "" : r, a.props.unslick ? "" : e)
                    })), a.list = null, a.track = null, a.state = y({}, s.default, {
                        currentSlide: a.props.initialSlide,
                        slideCount: n.default.Children.count(a.props.children)
                    }), a.callbackTimers = [], a.clickable = !0, a.debouncedResize = null, a
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && w(e, t)
                }(t, e), t
            }(n.default.Component);
            t.InnerSlider = S
        },
        873: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                animating: !1,
                autoplaying: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                dragging: !1,
                edgeDragged: !1,
                initialized: !1,
                lazyLoadedList: [],
                listHeight: null,
                listWidth: null,
                scrolling: !1,
                slideCount: null,
                slideHeight: null,
                slideWidth: null,
                swipeLeft: null,
                swiped: !1,
                swiping: !1,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                trackStyle: {},
                trackWidth: 0
            };
            t.default = n
        },
        874: function(e, t, a) {
            (function(t) {
                var a = /^\s+|\s+$/g,
                    n = /^[-+]0x[0-9a-f]+$/i,
                    r = /^0b[01]+$/i,
                    s = /^0o[0-7]+$/i,
                    i = parseInt,
                    l = "object" == typeof t && t && t.Object === Object && t,
                    o = "object" == typeof self && self && self.Object === Object && self,
                    c = l || o || Function("return this")(),
                    d = Object.prototype.toString,
                    u = Math.max,
                    p = Math.min,
                    m = function() {
                        return c.Date.now()
                    };

                function f(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function b(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == d.call(e)
                        }(e)) return NaN;
                    if (f(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = f(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(a, "");
                    var l = r.test(e);
                    return l || s.test(e) ? i(e.slice(2), l ? 2 : 8) : n.test(e) ? NaN : +e
                }
                e.exports = function(e, t, a) {
                    var n, r, s, i, l, o, c = 0,
                        d = !1,
                        h = !1,
                        g = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function y(t) {
                        var a = n,
                            s = r;
                        return n = r = void 0, c = t, i = e.apply(s, a)
                    }

                    function v(e) {
                        return c = e, l = setTimeout(w, t), d ? y(e) : i
                    }

                    function E(e) {
                        var a = e - o;
                        return void 0 === o || a >= t || a < 0 || h && e - c >= s
                    }

                    function w() {
                        var e = m();
                        if (E(e)) return x(e);
                        l = setTimeout(w, function(e) {
                            var a = t - (e - o);
                            return h ? p(a, s - (e - c)) : a
                        }(e))
                    }

                    function x(e) {
                        return l = void 0, g && n ? y(e) : (n = r = void 0, i)
                    }

                    function S() {
                        var e = m(),
                            a = E(e);
                        if (n = arguments, r = this, o = e, a) {
                            if (void 0 === l) return v(o);
                            if (h) return l = setTimeout(w, t), y(o)
                        }
                        return void 0 === l && (l = setTimeout(w, t)), i
                    }
                    return t = b(t) || 0, f(a) && (d = !!a.leading, s = (h = "maxWait" in a) ? u(b(a.maxWait) || 0, t) : s, g = "trailing" in a ? !!a.trailing : g), S.cancel = function() {
                        void 0 !== l && clearTimeout(l), c = 0, n = o = r = l = void 0
                    }, S.flush = function() {
                        return void 0 === l ? i : x(m())
                    }, S
                }
            }).call(this, a(27))
        },
        875: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Track = void 0;
            var n = i(a(0)),
                r = i(a(757)),
                s = a(791);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function u(e, t) {
                return !t || "object" !== l(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(a, !0).forEach((function(t) {
                        h(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : f(a).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function h(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var g = function(e) {
                    var t, a, n, r, s;
                    return n = (s = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || s >= e.slideCount, e.centerMode ? (r = Math.floor(e.slidesToShow / 2), a = (s - e.currentSlide) % e.slideCount === 0, s > e.currentSlide - r - 1 && s <= e.currentSlide + r && (t = !0)) : t = e.currentSlide <= s && s < e.currentSlide + e.slidesToShow, {
                        "slick-slide": !0,
                        "slick-active": t,
                        "slick-center": a,
                        "slick-cloned": n,
                        "slick-current": s === e.currentSlide
                    }
                },
                y = function(e, t) {
                    return e.key || t
                },
                v = function(e) {
                    var t, a = [],
                        i = [],
                        l = [],
                        o = n.default.Children.count(e.children),
                        c = (0, s.lazyStartIndex)(e),
                        d = (0, s.lazyEndIndex)(e);
                    return n.default.Children.forEach(e.children, (function(u, p) {
                        var m, f = {
                            message: "children",
                            index: p,
                            slidesToScroll: e.slidesToScroll,
                            currentSlide: e.currentSlide
                        };
                        m = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(p) >= 0 ? u : n.default.createElement("div", null);
                        var h = function(e) {
                                var t = {};
                                return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase), t
                            }(b({}, e, {
                                index: p
                            })),
                            v = m.props.className || "",
                            E = g(b({}, e, {
                                index: p
                            }));
                        if (a.push(n.default.cloneElement(m, {
                                key: "original" + y(m, p),
                                "data-index": p,
                                className: (0, r.default)(E, v),
                                tabIndex: "-1",
                                "aria-hidden": !E["slick-active"],
                                style: b({
                                    outline: "none"
                                }, m.props.style || {}, {}, h),
                                onClick: function(t) {
                                    m.props && m.props.onClick && m.props.onClick(t), e.focusOnSelect && e.focusOnSelect(f)
                                }
                            })), e.infinite && !1 === e.fade) {
                            var w = o - p;
                            w <= (0, s.getPreClones)(e) && o !== e.slidesToShow && ((t = -w) >= c && (m = u), E = g(b({}, e, {
                                index: t
                            })), i.push(n.default.cloneElement(m, {
                                key: "precloned" + y(m, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(E, v),
                                "aria-hidden": !E["slick-active"],
                                style: b({}, m.props.style || {}, {}, h),
                                onClick: function(t) {
                                    m.props && m.props.onClick && m.props.onClick(t), e.focusOnSelect && e.focusOnSelect(f)
                                }
                            }))), o !== e.slidesToShow && ((t = o + p) < d && (m = u), E = g(b({}, e, {
                                index: t
                            })), l.push(n.default.cloneElement(m, {
                                key: "postcloned" + y(m, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(E, v),
                                "aria-hidden": !E["slick-active"],
                                style: b({}, m.props.style || {}, {}, h),
                                onClick: function(t) {
                                    m.props && m.props.onClick && m.props.onClick(t), e.focusOnSelect && e.focusOnSelect(f)
                                }
                            })))
                        }
                    })), e.rtl ? i.concat(a, l).reverse() : i.concat(a, l)
                },
                E = function(e) {
                    function t() {
                        return c(this, t), u(this, p(t).apply(this, arguments))
                    }
                    var a, r, s;
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && m(e, t)
                    }(t, e), a = t, (r = [{
                        key: "render",
                        value: function() {
                            var e = v(this.props),
                                t = this.props,
                                a = {
                                    onMouseEnter: t.onMouseEnter,
                                    onMouseOver: t.onMouseOver,
                                    onMouseLeave: t.onMouseLeave
                                };
                            return n.default.createElement("div", o({
                                className: "slick-track",
                                style: this.props.trackStyle
                            }, a), e)
                        }
                    }]) && d(a.prototype, r), s && d(a, s), t
                }(n.default.PureComponent);
            t.Track = E
        },
        876: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Dots = void 0;
            var n = s(a(0)),
                r = s(a(757));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function o(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function u(e, t) {
                return !t || "object" !== i(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var f = function(e) {
                function t() {
                    return c(this, t), u(this, p(t).apply(this, arguments))
                }
                var a, s, i;
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && m(e, t)
                }(t, e), a = t, (s = [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t.preventDefault(), this.props.clickHandler(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this,
                            a = (e = {
                                slideCount: this.props.slideCount,
                                slidesToScroll: this.props.slidesToScroll,
                                slidesToShow: this.props.slidesToShow,
                                infinite: this.props.infinite
                            }).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1,
                            s = this.props,
                            i = {
                                onMouseEnter: s.onMouseEnter,
                                onMouseOver: s.onMouseOver,
                                onMouseLeave: s.onMouseLeave
                            },
                            c = Array.apply(null, Array(a + 1).join("0").split("")).map((function(e, a) {
                                var s = a * t.props.slidesToScroll,
                                    i = a * t.props.slidesToScroll + (t.props.slidesToScroll - 1),
                                    l = (0, r.default)({
                                        "slick-active": t.props.currentSlide >= s && t.props.currentSlide <= i
                                    }),
                                    o = {
                                        message: "dots",
                                        index: a,
                                        slidesToScroll: t.props.slidesToScroll,
                                        currentSlide: t.props.currentSlide
                                    },
                                    c = t.clickHandler.bind(t, o);
                                return n.default.createElement("li", {
                                    key: a,
                                    className: l
                                }, n.default.cloneElement(t.props.customPaging(a), {
                                    onClick: c
                                }))
                            }));
                        return n.default.cloneElement(this.props.appendDots(c), function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? l(a, !0).forEach((function(t) {
                                    o(e, t, a[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(a).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                                }))
                            }
                            return e
                        }({
                            className: this.props.dotsClass
                        }, i))
                    }
                }]) && d(a.prototype, s), i && d(a, i), t
            }(n.default.PureComponent);
            t.Dots = f
        },
        877: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NextArrow = t.PrevArrow = void 0;
            var n = i(a(0)),
                r = i(a(757)),
                s = a(791);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(a, !0).forEach((function(t) {
                        u(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(a).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function u(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t, a) {
                return t && m(e.prototype, t), a && m(e, a), e
            }

            function b(e, t) {
                return !t || "object" !== l(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function g(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var v = function(e) {
                function t() {
                    return p(this, t), b(this, h(t).apply(this, arguments))
                }
                return g(t, e), f(t, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-prev": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "previous"
                            });
                        !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                        var a = {
                                key: "0",
                                "data-role": "none",
                                className: (0, r.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            s = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.prevArrow ? n.default.cloneElement(this.props.prevArrow, d({}, a, {}, s)) : n.default.createElement("button", o({
                            key: "0",
                            type: "button"
                        }, a), " ", "Previous")
                    }
                }]), t
            }(n.default.PureComponent);
            t.PrevArrow = v;
            var E = function(e) {
                function t() {
                    return p(this, t), b(this, h(t).apply(this, arguments))
                }
                return g(t, e), f(t, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-next": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "next"
                            });
                        (0, s.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                        var a = {
                                key: "1",
                                "data-role": "none",
                                className: (0, r.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            i = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.nextArrow ? n.default.cloneElement(this.props.nextArrow, d({}, a, {}, i)) : n.default.createElement("button", o({
                            key: "1",
                            type: "button"
                        }, a), " ", "Next")
                    }
                }]), t
            }(n.default.PureComponent);
            t.NextArrow = E
        },
        878: function(e, t, a) {
            "use strict";
            a.r(t),
                function(e) {
                    var a = function() {
                            if ("undefined" !== typeof Map) return Map;

                            function e(e, t) {
                                var a = -1;
                                return e.some((function(e, n) {
                                    return e[0] === t && (a = n, !0)
                                })), a
                            }
                            return function() {
                                function t() {
                                    this.__entries__ = []
                                }
                                return Object.defineProperty(t.prototype, "size", {
                                    get: function() {
                                        return this.__entries__.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.get = function(t) {
                                    var a = e(this.__entries__, t),
                                        n = this.__entries__[a];
                                    return n && n[1]
                                }, t.prototype.set = function(t, a) {
                                    var n = e(this.__entries__, t);
                                    ~n ? this.__entries__[n][1] = a : this.__entries__.push([t, a])
                                }, t.prototype.delete = function(t) {
                                    var a = this.__entries__,
                                        n = e(a, t);
                                    ~n && a.splice(n, 1)
                                }, t.prototype.has = function(t) {
                                    return !!~e(this.__entries__, t)
                                }, t.prototype.clear = function() {
                                    this.__entries__.splice(0)
                                }, t.prototype.forEach = function(e, t) {
                                    void 0 === t && (t = null);
                                    for (var a = 0, n = this.__entries__; a < n.length; a++) {
                                        var r = n[a];
                                        e.call(t, r[1], r[0])
                                    }
                                }, t
                            }()
                        }(),
                        n = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                        r = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
                        s = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function(e) {
                            return setTimeout((function() {
                                return e(Date.now())
                            }), 1e3 / 60)
                        };
                    var i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        l = "undefined" !== typeof MutationObserver,
                        o = function() {
                            function e() {
                                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                                    var a = !1,
                                        n = !1,
                                        r = 0;

                                    function i() {
                                        a && (a = !1, e()), n && o()
                                    }

                                    function l() {
                                        s(i)
                                    }

                                    function o() {
                                        var e = Date.now();
                                        if (a) {
                                            if (e - r < 2) return;
                                            n = !0
                                        } else a = !0, n = !1, setTimeout(l, t);
                                        r = e
                                    }
                                    return o
                                }(this.refresh.bind(this), 20)
                            }
                            return e.prototype.addObserver = function(e) {
                                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                            }, e.prototype.removeObserver = function(e) {
                                var t = this.observers_,
                                    a = t.indexOf(e);
                                ~a && t.splice(a, 1), !t.length && this.connected_ && this.disconnect_()
                            }, e.prototype.refresh = function() {
                                this.updateObservers_() && this.refresh()
                            }, e.prototype.updateObservers_ = function() {
                                var e = this.observers_.filter((function(e) {
                                    return e.gatherActive(), e.hasActive()
                                }));
                                return e.forEach((function(e) {
                                    return e.broadcastActive()
                                })), e.length > 0
                            }, e.prototype.connect_ = function() {
                                n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                            }, e.prototype.disconnect_ = function() {
                                n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                            }, e.prototype.onTransitionEnd_ = function(e) {
                                var t = e.propertyName,
                                    a = void 0 === t ? "" : t;
                                i.some((function(e) {
                                    return !!~a.indexOf(e)
                                })) && this.refresh()
                            }, e.getInstance = function() {
                                return this.instance_ || (this.instance_ = new e), this.instance_
                            }, e.instance_ = null, e
                        }(),
                        c = function(e, t) {
                            for (var a = 0, n = Object.keys(t); a < n.length; a++) {
                                var r = n[a];
                                Object.defineProperty(e, r, {
                                    value: t[r],
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                })
                            }
                            return e
                        },
                        d = function(e) {
                            return e && e.ownerDocument && e.ownerDocument.defaultView || r
                        },
                        u = g(0, 0, 0, 0);

                    function p(e) {
                        return parseFloat(e) || 0
                    }

                    function m(e) {
                        for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
                        return t.reduce((function(t, a) {
                            return t + p(e["border-" + a + "-width"])
                        }), 0)
                    }

                    function f(e) {
                        var t = e.clientWidth,
                            a = e.clientHeight;
                        if (!t && !a) return u;
                        var n = d(e).getComputedStyle(e),
                            r = function(e) {
                                for (var t = {}, a = 0, n = ["top", "right", "bottom", "left"]; a < n.length; a++) {
                                    var r = n[a],
                                        s = e["padding-" + r];
                                    t[r] = p(s)
                                }
                                return t
                            }(n),
                            s = r.left + r.right,
                            i = r.top + r.bottom,
                            l = p(n.width),
                            o = p(n.height);
                        if ("border-box" === n.boxSizing && (Math.round(l + s) !== t && (l -= m(n, "left", "right") + s), Math.round(o + i) !== a && (o -= m(n, "top", "bottom") + i)), ! function(e) {
                                return e === d(e).document.documentElement
                            }(e)) {
                            var c = Math.round(l + s) - t,
                                f = Math.round(o + i) - a;
                            1 !== Math.abs(c) && (l -= c), 1 !== Math.abs(f) && (o -= f)
                        }
                        return g(r.left, r.top, l, o)
                    }
                    var b = "undefined" !== typeof SVGGraphicsElement ? function(e) {
                        return e instanceof d(e).SVGGraphicsElement
                    } : function(e) {
                        return e instanceof d(e).SVGElement && "function" === typeof e.getBBox
                    };

                    function h(e) {
                        return n ? b(e) ? function(e) {
                            var t = e.getBBox();
                            return g(0, 0, t.width, t.height)
                        }(e) : f(e) : u
                    }

                    function g(e, t, a, n) {
                        return {
                            x: e,
                            y: t,
                            width: a,
                            height: n
                        }
                    }
                    var y = function() {
                            function e(e) {
                                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = e
                            }
                            return e.prototype.isActive = function() {
                                var e = h(this.target);
                                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                            }, e.prototype.broadcastRect = function() {
                                var e = this.contentRect_;
                                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                            }, e
                        }(),
                        v = function(e, t) {
                            var a = function(e) {
                                var t = e.x,
                                    a = e.y,
                                    n = e.width,
                                    r = e.height,
                                    s = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                                    i = Object.create(s.prototype);
                                return c(i, {
                                    x: t,
                                    y: a,
                                    width: n,
                                    height: r,
                                    top: a,
                                    right: t + n,
                                    bottom: r + a,
                                    left: t
                                }), i
                            }(t);
                            c(this, {
                                target: e,
                                contentRect: a
                            })
                        },
                        E = function() {
                            function e(e, t, n) {
                                if (this.activeObservations_ = [], this.observations_ = new a, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                            }
                            return e.prototype.observe = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                                }
                            }, e.prototype.unobserve = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                                }
                            }, e.prototype.disconnect = function() {
                                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                            }, e.prototype.gatherActive = function() {
                                var e = this;
                                this.clearActive(), this.observations_.forEach((function(t) {
                                    t.isActive() && e.activeObservations_.push(t)
                                }))
                            }, e.prototype.broadcastActive = function() {
                                if (this.hasActive()) {
                                    var e = this.callbackCtx_,
                                        t = this.activeObservations_.map((function(e) {
                                            return new v(e.target, e.broadcastRect())
                                        }));
                                    this.callback_.call(e, t, e), this.clearActive()
                                }
                            }, e.prototype.clearActive = function() {
                                this.activeObservations_.splice(0)
                            }, e.prototype.hasActive = function() {
                                return this.activeObservations_.length > 0
                            }, e
                        }(),
                        w = "undefined" !== typeof WeakMap ? new WeakMap : new a,
                        x = function e(t) {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            var a = o.getInstance(),
                                n = new E(t, a, this);
                            w.set(this, n)
                        };
                    ["observe", "unobserve", "disconnect"].forEach((function(e) {
                        x.prototype[e] = function() {
                            var t;
                            return (t = w.get(this))[e].apply(t, arguments)
                        }
                    }));
                    var S = "undefined" !== typeof r.ResizeObserver ? r.ResizeObserver : x;
                    t.default = S
                }.call(this, a(27))
        },
        879: function(e, t, a) {
            var n = a(880),
                r = function(e) {
                    var t = "",
                        a = Object.keys(e);
                    return a.forEach((function(r, s) {
                        var i = e[r];
                        (function(e) {
                            return /[height|width]$/.test(e)
                        })(r = n(r)) && "number" === typeof i && (i += "px"), t += !0 === i ? r : !1 === i ? "not " + r : "(" + r + ": " + i + ")", s < a.length - 1 && (t += " and ")
                    })), t
                };
            e.exports = function(e) {
                var t = "";
                return "string" === typeof e ? e : e instanceof Array ? (e.forEach((function(a, n) {
                    t += r(a), n < e.length - 1 && (t += ", ")
                })), t) : r(e)
            }
        },
        880: function(e, t) {
            e.exports = function(e) {
                return e.replace(/[A-Z]/g, (function(e) {
                    return "-" + e.toLowerCase()
                })).toLowerCase()
            }
        },
        881: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, r = (n = a(0)) && n.__esModule ? n : {
                default: n
            };
            var s = {
                accessibility: !0,
                adaptiveHeight: !1,
                afterChange: null,
                appendDots: function(e) {
                    return r.default.createElement("ul", {
                        style: {
                            display: "block"
                        }
                    }, e)
                },
                arrows: !0,
                autoplay: !1,
                autoplaySpeed: 3e3,
                beforeChange: null,
                centerMode: !1,
                centerPadding: "50px",
                className: "",
                cssEase: "ease",
                customPaging: function(e) {
                    return r.default.createElement("button", null, e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: null,
                nextArrow: null,
                onEdge: null,
                onInit: null,
                onLazyLoadError: null,
                onReInit: null,
                pauseOnDotsHover: !1,
                pauseOnFocus: !1,
                pauseOnHover: !0,
                prevArrow: null,
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "div",
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipe: !0,
                swipeEvent: null,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            };
            t.default = s
        },
        882: function(e, t, a) {
            var n = a(883);
            e.exports = new n
        },
        883: function(e, t, a) {
            var n = a(884),
                r = a(838),
                s = r.each,
                i = r.isFunction,
                l = r.isArray;

            function o() {
                if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            o.prototype = {
                constructor: o,
                register: function(e, t, a) {
                    var r = this.queries,
                        o = a && this.browserIsIncapable;
                    return r[e] || (r[e] = new n(e, o)), i(t) && (t = {
                        match: t
                    }), l(t) || (t = [t]), s(t, (function(t) {
                        i(t) && (t = {
                            match: t
                        }), r[e].addHandler(t)
                    })), this
                },
                unregister: function(e, t) {
                    var a = this.queries[e];
                    return a && (t ? a.removeHandler(t) : (a.clear(), delete this.queries[e])), this
                }
            }, e.exports = o
        },
        884: function(e, t, a) {
            var n = a(885),
                r = a(838).each;

            function s(e, t) {
                this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
                var a = this;
                this.listener = function(e) {
                    a.mql = e.currentTarget || e, a.assess()
                }, this.mql.addListener(this.listener)
            }
            s.prototype = {
                constuctor: s,
                addHandler: function(e) {
                    var t = new n(e);
                    this.handlers.push(t), this.matches() && t.on()
                },
                removeHandler: function(e) {
                    var t = this.handlers;
                    r(t, (function(a, n) {
                        if (a.equals(e)) return a.destroy(), !t.splice(n, 1)
                    }))
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function() {
                    r(this.handlers, (function(e) {
                        e.destroy()
                    })), this.mql.removeListener(this.listener), this.handlers.length = 0
                },
                assess: function() {
                    var e = this.matches() ? "on" : "off";
                    r(this.handlers, (function(t) {
                        t[e]()
                    }))
                }
            }, e.exports = s
        },
        885: function(e, t) {
            function a(e) {
                this.options = e, !e.deferSetup && this.setup()
            }
            a.prototype = {
                constructor: a,
                setup: function() {
                    this.options.setup && this.options.setup(), this.initialised = !0
                },
                on: function() {
                    !this.initialised && this.setup(), this.options.match && this.options.match()
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function(e) {
                    return this.options === e || this.options.match === e
                }
            }, e.exports = a
        },
        886: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/samir-zalcevic-120px.5e56f318.png"
        },
        887: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/peter-girr-120px.8591cb0c.png"
        },
        888: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/aaron-hanson-120px.8c175aa5.png"
        },
        889: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/vitally-marinchenko-120px.72ee793a.png"
        },
        890: function(e, t, a) {
            e.exports = a.p + "3ZDXbalYRiBQgBtg9dSbzUzqX_uU3CBwHr_ZrPt7uvo/static/media/rene-von-mangoldt-120px.87e44088.png"
        },
        991: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return Vt
            }));
            var n = a(25),
                r = a(0),
                s = a.n(r),
                i = a(749),
                l = a(18),
                o = a(763),
                c = a(733),
                d = a(726),
                u = a(744),
                p = a(753),
                m = a.n(p),
                f = a(860),
                b = a.n(f),
                h = a(773),
                g = a(345),
                y = Object(r.lazy)((function() {
                    return a.e(44).then(a.bind(null, 987))
                })),
                v = {
                    id: "app.labels.wiseToken",
                    defaultMessage: "WISE Token"
                },
                E = {
                    id: "app.labels.stakeWiseToEarnMoreEth",
                    defaultMessage: "Stake WISE to earn more ETH"
                },
                w = {
                    id: "app.labels.wiseIsAUniqueStakingPlatform",
                    defaultMessage: "WISE is a unique staking platform that leveraged an\n        unprecedented 96% of presale capital to form an instant, massive, and\n        unremovable market on Uniswap.org. WISE is audited, functional,\n        complete, and free of any admin keys, or anything threatening its\n        decentralization!"
                },
                x = {
                    id: "app.labels.ifYouAre",
                    defaultMessage: "If you\u2019re looking for the best way to earn\n        crypto, you\u2019re in the right place."
                },
                S = {
                    id: "app.labels.wiseVideo",
                    defaultMessage: "Wise Video"
                },
                N = {
                    id: "app.labels.tealPaper",
                    defaultMessage: "Teal Paper"
                };

            function T() {
                var e = Object(r.useState)(!1),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    i = t[1],
                    p = function() {
                        i(!a)
                    },
                    f = Object(g.a)().formatMessage;
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: "hero-wrapper bg-composed-wrapper bg-midnight-bloom"
                }, s.a.createElement("div", {
                    className: "header-top-section pb-2"
                }, s.a.createElement(h.a, null)), s.a.createElement("div", {
                    className: "hero-wrapper--content"
                }, s.a.createElement("div", {
                    className: "bg-composed-wrapper--image bg-composed-filter-rm",
                    style: {
                        backgroundImage: "url(" + m.a + ")"
                    }
                }), s.a.createElement("div", {
                    className: "bg-composed-wrapper--bg bg-second opacity-5"
                }), s.a.createElement("div", {
                    className: "bg-composed-wrapper--content"
                }, s.a.createElement(o.a, {
                    className: "z-over shadow-container-content-5 pb-0"
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6,
                    className: "pt-5"
                }, s.a.createElement(c.a, {
                    item: !0,
                    lg: 6
                }, s.a.createElement("div", {
                    className: "pt-0 text-white pt-xl-1 pr-0 pb-5 pb-lg-0"
                }, s.a.createElement("h1", {
                    className: "display-2 font-weight-bold"
                }, f(v)), s.a.createElement("p", {
                    className: "display-4"
                }, f(E)), s.a.createElement("p", {
                    className: "font-size-xl m-0 pt-0 pb-2 text-white-50"
                }, f(w), " ", s.a.createElement("i", null, f(x))), s.a.createElement("div", {
                    className: "pt-3 extra-buttons"
                }, s.a.createElement(d.a, {
                    onClick: p,
                    target: "_blank",
                    size: "large",
                    className: "pulsing-button rounded-sm font-weight-bold shadow-second-sm btn-primary btn-hover-teal hover-scale-sm"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, f(S)), s.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "arrow-right"]
                }))), s.a.createElement(d.a, {
                    href: "/teal",
                    target: "_blank",
                    size: "large",
                    className: "rounded-sm bg-white-10 text-white ml-3 hover-scale-sm"
                }, s.a.createElement("span", null, f(N)))))), s.a.createElement(c.a, {
                    item: !0,
                    lg: 6,
                    style: {
                        minHeight: "526px"
                    },
                    className: "d-none d-lg-flex align-items-center px-0 py-0 hover-scale-lg mt-4"
                }, s.a.createElement("img", {
                    src: b.a,
                    alt: "...",
                    className: "m-0 img-fit-container cursor-zoom"
                })))), s.a.createElement("div", {
                    className: "shadow-container-blocks-4 z-below d-none d-lg-block"
                }, s.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1440 320"
                }, s.a.createElement("path", {
                    fill: "var(--white)",
                    fillOpacity: "1",
                    d: "M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
                })))))), s.a.createElement(u.a, {
                    open: a,
                    onClose: p,
                    classes: {
                        paper: "shadow-lg rounded"
                    }
                }, s.a.createElement(r.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, s.a.createElement(y, null))))
            }
            var k = a(95),
                O = a(244),
                C = a.n(O);

            function M() {
                return s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
                    options: {
                        chart: {
                            toolbar: {
                                show: !1
                            },
                            sparkline: {
                                enabled: !0
                            }
                        },
                        tooltip: {
                            enabled: !1
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            color: "#4191ff",
                            curve: "smooth",
                            width: 3
                        },
                        colors: ["#4191ff"],
                        fill: {
                            color: "#4191ff",
                            opacity: .1,
                            gradient: {
                                shade: "light",
                                type: "vertical",
                                shadeIntensity: .3,
                                inverseColors: !1,
                                opacityFrom: .7,
                                opacityTo: 0,
                                stops: [0, 100]
                            }
                        },
                        legend: {
                            show: !1
                        },
                        xaxis: {
                            categories: [],
                            crosshairs: {
                                width: 1
                            }
                        },
                        yaxis: {
                            min: 0
                        }
                    },
                    series: [{
                        name: "",
                        data: [47, 38, 56, 24, 45, 65, 72, 81, 76, 87, 91, 93, 110, 115, 125]
                    }],
                    type: "area",
                    height: 350
                }))
            }
            var I = a(861),
                j = a.n(I),
                W = Object(r.lazy)((function() {
                    return Promise.resolve().then(a.bind(null, 849))
                })),
                R = Object(r.lazy)((function() {
                    return a.e(43).then(a.bind(null, 934))
                })),
                A = Object(k.a)({
                    wisePurpose: {
                        id: "app.labels.wisePurpose",
                        defaultMessage: "WISE Purpose"
                    },
                    corePurpose: {
                        id: "app.labels.corePurpose",
                        defaultMessage: "The core purpose of the WISE project"
                    },
                    stakingToken: {
                        id: "app.labels.stakingToken",
                        defaultMessage: "staking token"
                    },
                    rewardingTheHolder: {
                        id: "app.labels.rewardingTheHolder",
                        defaultMessage: "rewarding the holder with earned interest in exchange for locking up their funds for a period of time."
                    },
                    wiseGives: {
                        id: "app.labels.wiseGives",
                        defaultMessage: "WISE gives the staker complete flexibility in choosing exactly when to withdraw their interest during the life of the stake. You can withdraw interest daily, irregularly, wait until maturity, or whatever you like!"
                    },
                    wiseStakes: {
                        id: "app.labels.wiseStakes",
                        defaultMessage: "WISE stakes have higher return, much lower risk (due to being decentralized and trustless), and far higher flexibility than both bonds and CDs. No more trusting banks and governments to stay solvent and not change their rules. No more worrying that a bond issuer may default on you."
                    },
                    wiseIsPure: {
                        id: "app.labels.wiseIsPure",
                        defaultMessage: "WISE is pure, immutable code."
                    },
                    wiseSmartContracts: {
                        id: "app.labels.wiseSmartContracts",
                        defaultMessage: "WISE Smart Contracts"
                    },
                    theWiseProject: {
                        id: "app.labels.theWiseProject",
                        defaultMessage: "The WISE project consists of smart contracts capitalizing on token liquidity formation, a referral system, and token staking capabilities\n        which are explained in the"
                    },
                    documentationSection: {
                        id: "app.labels.documentationSection",
                        defaultMessage: "documentation section"
                    },
                    theOverallFlow: {
                        id: "app.labels.theOverallFlow",
                        defaultMessage: "The overall flow of the WISE project can be described in  "
                    },
                    twoMain: {
                        id: "app.labels.twoMain",
                        defaultMessage: "two main epochs"
                    },
                    inEach: {
                        id: "app.labels.inEach",
                        defaultMessage: "each developed as a smart contract for specific financial purpose."
                    },
                    liquidityTransformerEpoch: {
                        id: "app.labels.liquidityTransformerEpoch",
                        defaultMessage: "Liquidity Transformer Epoch"
                    },
                    theLaunchOfTheWise: {
                        id: "app.labels.theLaunchOfTheWise",
                        defaultMessage: "The launch of the WISE contract will kick off an initial 50 day phase during which users may send ETH to the contract in order to reserve WISE tokens and form main liquidity pool."
                    },
                    reserveWise: {
                        id: "app.labels.reserveWise",
                        defaultMessage: "Reserve WISE"
                    },
                    circulationEpoch: {
                        id: "app.labels.circulationEpoch",
                        defaultMessage: "Circulation Epoch"
                    },
                    atThisPoint: {
                        id: "app.labels.atThisPoint",
                        defaultMessage: "At this point, no further token reservations can be made.\n        Reserved WISE and referrer bonus WISE may now be minted by users, at their leisure. Users may begin staking WISE."
                    },
                    stakeWise: {
                        id: "app.labels.stakeWise",
                        defaultMessage: "Stake WISE"
                    },
                    quickWiseReservation: {
                        id: "app.labels.quickWiseReservation",
                        defaultMessage: "Quick WISE Reservation"
                    }
                }, "reserveWise", {
                    id: "app.labels.reserveWise",
                    defaultMessage: "Reserve Wise"
                });

            function D() {
                var e = Object(r.useState)(!1),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    i = t[1],
                    p = function() {
                        return i(!a)
                    },
                    m = Object(r.useState)(!1),
                    f = Object(n.a)(m, 2),
                    b = f[0],
                    h = f[1],
                    y = function() {
                        return h(!b)
                    },
                    v = Object(g.a)().formatMessage;
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: "z-over mb-10",
                    style: {
                        marginTop: "-50px"
                    }
                }, s.a.createElement(o.a, {
                    className: "hidden pb-3 pb-xl-5"
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6
                }, s.a.createElement(c.a, {
                    item: !0,
                    xl: 6,
                    className: "d-none d-xl-none align-items-center"
                }, s.a.createElement("img", {
                    alt: "...",
                    className: "w-100",
                    src: j.a
                })), s.a.createElement(c.a, {
                    item: !0,
                    xl: 12,
                    md: 12
                }, s.a.createElement("div", {
                    className: "py-0 pb-2 py-xl-5"
                }, s.a.createElement("div", {
                    className: "pr-0 pr-xl-5"
                }, s.a.createElement("h2", {
                    className: "display-2 mb-4 mt-4 font-weight-bold text-black"
                }, v(A.wisePurpose)), s.a.createElement("p", {
                    className: "font-size-xl mb-4"
                }, v(A.corePurpose), " \u2014 ", s.a.createElement("b", null, v(A.stakingToken)), " \u2014 ", v(A.rewardingTheHolder)), s.a.createElement("p", {
                    className: "font-size-xl mb-4"
                }, v(A.wiseGives)), s.a.createElement("p", {
                    className: "font-size-xl mb-4"
                }, v(A.wiseStakes)), s.a.createElement("p", {
                    className: "font-size-xl mb-4"
                }, s.a.createElement("b", null, v(A.wiseIsPure)))))))), s.a.createElement(o.a, {
                    className: "pb-0"
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6
                }, s.a.createElement(c.a, {
                    item: !0,
                    xl: 12,
                    className: "pb-0"
                }, s.a.createElement("div", {
                    className: "pt-5 pb-3 pb-lg-0 text-center text-lg-left"
                }, s.a.createElement("div", {
                    className: "pr-0 pr-xl-5"
                }, s.a.createElement("h2", {
                    className: "display-3 mb-4 mt-4 font-weight-bold text-black"
                }, v(A.wiseSmartContracts)), s.a.createElement("p", {
                    className: "font-size-xl"
                }, v(A.theWiseProject), " ", s.a.createElement("a", {
                    className: "activeLink",
                    href: "/docs"
                }, v(A.documentationSection)), ".", v(A.theOverallFlow), " ", s.a.createElement("b", null, v(A.twoMain)), " - ", v(A.inEach))))))), s.a.createElement(o.a, null, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6
                }, s.a.createElement(c.a, {
                    item: !0,
                    md: 6,
                    xl: 6
                }, s.a.createElement("div", {
                    className: "card bg-white card-box card-box-border-top br-tl br-tr hover-scale-sm border-primary text-center p-3 p-xl-4 mb-5 d-block"
                }, s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-2",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))), s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-primary text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["far", "keyboard"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, v(A.liquidityTransformerEpoch)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, v(A.theLaunchOfTheWise)), s.a.createElement("div", {
                    className: "py-3 mx-2"
                }, s.a.createElement(d.a, {
                    onClick: p,
                    className: "btn-primary text-uppercase font-weight-bold font-size-md w-100"
                }, v(A.reserveWise))))), s.a.createElement(c.a, {
                    item: !0,
                    md: 6,
                    xl: 6
                }, s.a.createElement("div", {
                    className: "card bg-white card-box card-box-border-top br-tl br-tr hover-scale-sm border-wise text-center p-3 p-xl-4 mb-5 d-block"
                }, s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-3",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-wise",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))), s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-wise text-white mb-4 mx-auto"
                }, s.a.createElement(l.a, {
                    icon: ["far", "clock"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, v(A.circulationEpoch)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, v(A.atThisPoint)), s.a.createElement("div", {
                    className: "py-3 mx-2"
                }, s.a.createElement(d.a, {
                    onClick: y,
                    className: "btn-wise text-uppercase text-white font-weight-bold font-size-md w-100"
                }, v(A.stakeWise)))))))), s.a.createElement("div", {
                    className: "shadow-container-blocks-3 z-below d-none d-lg-block"
                }, s.a.createElement(M, null)), s.a.createElement(r.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, s.a.createElement(u.a, {
                    open: a,
                    classes: {
                        paper: "shadow-lg rounded"
                    }
                }, s.a.createElement(r.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, s.a.createElement(W, {
                    headerText: v(A.quickWiseReservation),
                    defaultText: v(A.reserveWise),
                    selectedDays: null,
                    toggle: p
                })))), s.a.createElement(u.a, {
                    open: b,
                    onClose: y,
                    classes: {
                        paper: "shadow-lg rounded"
                    }
                }, s.a.createElement(r.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, s.a.createElement(R, null))))
            }
            var U = a(862),
                P = a.n(U),
                z = a(164),
                L = a(42),
                _ = {
                    id: "app.labels.liquidityTransformer",
                    defaultMessage: "Liquidity Transformer"
                },
                H = {
                    id: "app.labels.thisComponent",
                    defaultMessage: "This component of the WISE project trustlessly generates the main liquidity pool for WISE using the Uniswap protocol.  WISE tokens are minted to investors who make reservations with ETH, and the ETH is paired with more WISE and sent to Uniswap. This ownerless liquidity pool backs the value of all WISE tokens, and allows anyone to buy or sell large amounts of WISE at their leisure."
                },
                F = {
                    id: "app.labels.checkSmartContract",
                    defaultMessage: "Check Smart Contract"
                },
                q = {
                    id: "app.labels.uniswap",
                    defaultMessage: "Uniswap"
                };

            function V() {
                var e = Object(g.a)().formatMessage,
                    t = Object(L.b)().chainId,
                    a = Object(z.a)(parseInt(t));
                return s.a.createElement(s.a.Fragment, null, s.a.createElement(o.a, {
                    className: "text-second pb-0 pb-lg-5"
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6,
                    className: "py-5"
                }, s.a.createElement(c.a, {
                    item: !0,
                    lg: 6,
                    className: "d-flex align-items-center px-0 py-0 hover-scale-lg"
                }, s.a.createElement("img", {
                    src: P.a,
                    alt: "...",
                    className: "m-0 w-90 cursor-zoom"
                })), s.a.createElement(c.a, {
                    item: !0,
                    lg: 6,
                    className: "d-flex align-items-center"
                }, s.a.createElement("div", {
                    className: "text-center text-lg-left"
                }, s.a.createElement("h2", {
                    className: "display-3 font-weight-bold mt-5 mt-lg-0"
                }, e(_)), s.a.createElement("p", {
                    className: "font-size-xl py-3 text-body"
                }, e(H)), s.a.createElement("div", {
                    className: "d-block d-lg-flex"
                }, s.a.createElement("div", {
                    className: "mr-0 pt-3 mr-lg-3"
                }, s.a.createElement(d.a, {
                    href: "".concat(a.etherScan, "/address/").concat(a.address, "#readContract"),
                    target: "_blank",
                    size: "large",
                    className: "shadow-second-sm btn-primary hover-scale-sm w-100"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "arrow-right"]
                })), s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, e(F)))), s.a.createElement("div", {
                    className: "pt-3"
                }, s.a.createElement(d.a, {
                    href: "https://uniswap.org/",
                    target: "_blank",
                    size: "large",
                    className: "shadow-second-sm uniswap-button hover-scale-sm w-100"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "arrow-right"]
                })), s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, e(q))))))))))
            }
            var G = a(863),
                B = a.n(G),
                Y = {
                    id: "app.labels.provableOracleAPI",
                    defaultMessage: "Provable Oracle API"
                },
                Q = {
                    id: "app.labels.theAmountOf",
                    defaultMessage: "The amount of available WISE tokens offered on random supply days is determined shortly after the end of that day. WISE leverages the Provable Oracle API, which generates randomness delivered on-chain in a provably cryptographically secure manner. On random supply days, even the WISE developers won't know how much supply is offered until that day ends."
                },
                X = {
                    id: "app.labels.checkSmartContract",
                    defaultMessage: "Check Smart Contract"
                },
                Z = {
                    id: "app.labels.provableOracle",
                    defaultMessage: "Provable Oracle"
                };

            function J() {
                var e = Object(g.a)().formatMessage,
                    t = Object(L.b)().chainId,
                    a = Object(z.a)(parseInt(t));
                return s.a.createElement(s.a.Fragment, null, s.a.createElement(o.a, {
                    className: "text-second pb-0 pb-lg-5"
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6,
                    className: "py-5 reverse-column-mobile"
                }, s.a.createElement(c.a, {
                    item: !0,
                    lg: 6,
                    className: "d-flex align-items-center pr-0 pr-lg-5"
                }, s.a.createElement("div", {
                    className: "text-center text-lg-left"
                }, s.a.createElement("h2", {
                    className: "display-3 font-weight-bold"
                }, e(Y)), s.a.createElement("p", {
                    className: "font-size-xl py-3 text-body"
                }, e(Q)), s.a.createElement("div", {
                    className: "d-block d-lg-flex"
                }, s.a.createElement("div", {
                    className: "pt-3 mr-0 mr-lg-3"
                }, s.a.createElement(d.a, {
                    href: "".concat(a.etherScan, "/address/").concat(a.address, "#code"),
                    target: "_blank",
                    size: "large",
                    className: "w-100 shadow-second-sm btn-primary hover-scale-sm"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "arrow-right"]
                })), s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, e(X)))), s.a.createElement("div", {
                    className: "pt-3"
                }, s.a.createElement(d.a, {
                    href: "https://provable.xyz/",
                    target: "_blank",
                    size: "large",
                    className: "w-100 shadow-second-sm provable-button hover-scale-sm"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "arrow-right"]
                })), s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, e(Z))))))), s.a.createElement(c.a, {
                    item: !0,
                    lg: 6,
                    className: "d-flex align-items-center pt-5 px-0 py-0 hover-scale-lg"
                }, s.a.createElement("img", {
                    src: B.a,
                    alt: "...",
                    className: "m-5 m-lg-0 w-90 cursor-zoom"
                })))))
            }
            var K = a(741),
                $ = a(864),
                ee = a.n($),
                te = a(865),
                ae = a.n(te),
                ne = a(866),
                re = a.n(ne),
                se = a(867),
                ie = a.n(se),
                le = a(868),
                oe = a.n(le),
                ce = a(869),
                de = a.n(ce),
                ue = Object(r.lazy)((function() {
                    return Promise.resolve().then(a.bind(null, 849))
                })),
                pe = {
                    id: "app.labels.useDefi",
                    defaultMessage: "Use DeFi Tokens for WISE Reservations"
                },
                me = {
                    id: "app.labels.theWiseLiquidityTransformer",
                    defaultMessage: "The WISE Liquidity Transformer will be able to accept various tokens and convert them through Uniswap into ETH for WISE reservations."
                },
                fe = {
                    id: "app.labels.uniswapSupport",
                    defaultMessage: "Uniswap Support"
                },
                be = {
                    id: "app.labels.visitUniswap",
                    defaultMessage: "\ud83e\udd84 visit uniswap.org to learn more"
                },
                he = {
                    id: "app.labels.basicAttentionToken",
                    defaultMessage: "Basic Attention Token"
                },
                ge = {
                    id: "app.labels.makerDAOToken",
                    defaultMessage: "Maker DAO Token"
                },
                ye = {
                    id: "app.labels.daiStableCoin",
                    defaultMessage: "DAI Stablecoin"
                },
                ve = {
                    id: "app.labels.oxToken",
                    defaultMessage: "0x Token"
                },
                Ee = {
                    id: "app.labels.loopringToken",
                    defaultMessage: "Loopring Token"
                },
                we = {
                    id: "app.labels.kyberNetworkToken",
                    defaultMessage: "Kyber Network Token"
                },
                xe = {
                    id: "app.labels.quickWiseReservation",
                    defaultMessage: "Quick WISE Reservation"
                },
                Se = {
                    id: "app.labels.reserveWise",
                    defaultMessage: "Reserve Wise"
                };

            function Ne() {
                var e = Object(r.useState)(!1),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    i = t[1],
                    d = function() {
                        return i(!a)
                    },
                    p = Object(g.a)().formatMessage;
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: ""
                }, s.a.createElement("div", {
                    className: "bg-plum-plate mt-5 pt-1 pb-5"
                }, s.a.createElement(o.a, null, s.a.createElement(c.a, {
                    item: !0,
                    lg: 10,
                    xl: 8,
                    className: "mx-auto mt-5 pt-5 text-white text-center"
                }, s.a.createElement("h2", {
                    className: "font-weight-bold text-white display-3"
                }, p(pe)), s.a.createElement(c.a, {
                    item: !0,
                    md: 11,
                    lg: 10,
                    className: "mx-auto"
                }, s.a.createElement("p", {
                    className: "text-white opacity-6 mt-3 mb-3 font-size-xxl"
                }, p(me)))), s.a.createElement("div", {
                    className: "d-flex hidden justify-content-center align-items-center mb-3"
                }, s.a.createElement("div", {
                    className: "badge-pill badge badge-success px-4 h-auto py-1"
                }, p(fe)), s.a.createElement(K.a, {
                    className: "hidden",
                    placement: "right",
                    title: p(be),
                    arrow: !0
                }, s.a.createElement("span", {
                    className: "text-white-50 ml-3"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"]
                })))), s.a.createElement("div", {
                    className: "pb-5 d-flex flex-wrap align-items-center justify-content-center"
                }, s.a.createElement(K.a, {
                    placement: "bottom",
                    title: p(he),
                    arrow: !0
                }, s.a.createElement("div", {
                    onClick: d,
                    className: "bg-white cursor-pointer rounded btn-icon d-100 shadow-sm-dark m-4 hover-scale-lg d-flex align-self-stretch"
                }, s.a.createElement("img", {
                    src: ee.a,
                    style: {
                        height: 60
                    },
                    className: "m-auto img-fluid",
                    alt: "..."
                }))), s.a.createElement(K.a, {
                    placement: "bottom",
                    title: p(ge),
                    arrow: !0
                }, s.a.createElement("div", {
                    onClick: d,
                    className: "bg-white cursor-pointer rounded btn-icon d-100 shadow-sm-dark m-4 hover-scale-lg d-flex align-self-stretch"
                }, s.a.createElement("img", {
                    src: ae.a,
                    style: {
                        height: 60
                    },
                    className: "m-auto img-fluid",
                    alt: "..."
                }))), s.a.createElement(K.a, {
                    placement: "bottom",
                    title: p(ye),
                    arrow: !0
                }, s.a.createElement("div", {
                    onClick: d,
                    className: "bg-white cursor-pointer rounded btn-icon d-100 shadow-sm-dark m-4 hover-scale-lg d-flex align-self-stretch"
                }, s.a.createElement("img", {
                    src: re.a,
                    style: {
                        height: 60
                    },
                    className: "m-auto img-fluid",
                    alt: "..."
                }))), s.a.createElement(K.a, {
                    placement: "bottom",
                    title: p(ve),
                    arrow: !0
                }, s.a.createElement("div", {
                    onClick: d,
                    className: "bg-white cursor-pointer rounded btn-icon d-100 shadow-sm-dark m-4 hover-scale-lg d-flex align-self-stretch"
                }, s.a.createElement("img", {
                    src: ie.a,
                    style: {
                        height: 60
                    },
                    className: "m-auto img-fluid",
                    alt: "..."
                }))), s.a.createElement(K.a, {
                    placement: "bottom",
                    title: p(Ee),
                    arrow: !0
                }, s.a.createElement("div", {
                    onClick: d,
                    className: "bg-white cursor-pointer rounded btn-icon d-100 shadow-sm-dark m-4 hover-scale-lg d-flex align-self-stretch"
                }, s.a.createElement("img", {
                    src: oe.a,
                    style: {
                        height: 60
                    },
                    className: "m-auto img-fluid",
                    alt: "..."
                }))), s.a.createElement(K.a, {
                    placement: "bottom",
                    title: p(we),
                    arrow: !0
                }, s.a.createElement("div", {
                    onClick: d,
                    className: "bg-white cursor-pointer rounded btn-icon d-100 shadow-sm-dark m-4 hover-scale-lg d-flex align-self-stretch"
                }, s.a.createElement("img", {
                    src: de.a,
                    style: {
                        height: 60
                    },
                    className: "m-auto img-fluid",
                    alt: "..."
                }))))))), s.a.createElement(u.a, {
                    open: a,
                    classes: {
                        paper: "shadow-lg rounded"
                    }
                }, s.a.createElement(r.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, s.a.createElement(ue, {
                    headerText: p(xe),
                    defaultText: p(Se),
                    selectedDays: null,
                    toggle: d
                }))))
            }
            var Te = a(765),
                ke = a(766),
                Oe = a(774),
                Ce = a(870),
                Me = a.n(Ce),
                Ie = a(886),
                je = a.n(Ie),
                We = a(887),
                Re = a.n(We),
                Ae = a(888),
                De = a.n(Ae),
                Ue = a(889),
                Pe = a.n(Ue),
                ze = a(890),
                Le = a.n(ze);

            function _e(e) {
                var t = e.className,
                    a = e.onClick;
                return s.a.createElement("div", {
                    className: t,
                    onClick: a
                }, s.a.createElement(l.a, {
                    icon: ["fas", "chevron-right"]
                }))
            }

            function He(e) {
                var t = e.className,
                    a = e.onClick;
                return s.a.createElement("div", {
                    className: t,
                    onClick: a
                }, s.a.createElement(l.a, {
                    icon: ["fas", "chevron-left"]
                }))
            }
            var Fe = {
                    id: "app.labels.meetWiseTeam",
                    defaultMessage: "Meet the WISE Team"
                },
                qe = {
                    id: "app.labels.weAreATeam",
                    defaultMessage: "We are a team spanning the globe with the common goal\n        of developing and launching WISE for the benefit of the world."
                },
                Ve = {
                    id: "app.labels.founder",
                    defaultMessage: "Founder"
                },
                Ge = {
                    id: "app.labels.peterIsReal",
                    defaultMessage: "Peter is a real estate entrepreneur and Army National Guard serviceman.\n        The graveyard of bad crypto projects drove him to use his business acumen\n        and military training as an intelligence officer to design a superior system.\n        Based in Los Angeles, Peter is on a mission to teach every crypto user how\n        to evaluate systems and invest wisely."
                },
                Be = {
                    id: "app.labels.cto",
                    defaultMessage: "Chief Technology Officer"
                },
                Ye = {
                    id: "app.labels.aaronIs",
                    defaultMessage: "Aaron is a lifelong software engineer, having started on the Commodore 64 and TRS-80.\n        He has developed software for a wide array of industries including mathematics,\n        big data analytics, telecom, manufacturing, and blockchain.  He currently leads engineering\n        teams to deliver robust, highly available and secure full-stack solutions."
                },
                Qe = {
                    id: "app.labels.leadSoftwareEngineer",
                    defaultMessage: "Lead Software Engineer"
                },
                Xe = {
                    id: "app.labels.vitallyIs",
                    defaultMessage: "Living and breathing Solidity, Vitally is a first-class engineer focusing on the latest\n        and most interesting solutions in the blockchain space. His main goal is to bring\n        adoption to crypto, which is why Vitally shares his knowledge as a part-time tutor,\n        teaching and coaching Solidity basics to anyone interested, and providing professional\n        guides on how to build modern and functional Dapps."
                },
                Ze = {
                    id: "app.labels.mathematician",
                    defaultMessage: "Mathematician"
                },
                Je = {
                    id: "app.labels.reneIs",
                    defaultMessage: "Rene is a published particle physics graduate from an elite university\n        in Germany (Exzellenz Universit\xe4t). He wrote his thesis for CERN,\n        the largest research facility in the world. He turned poker professional in 2016."
                },
                Ke = {
                    id: "app.labels.designer",
                    defaultMessage: "Designer"
                },
                $e = {
                    id: "app.labels.samirIs",
                    defaultMessage: "Samir is a web and app UI/UX designer, with a creative mind from Serbia. He enjoys making a simple and efficient user-centered design for web and mobile devices. His focus is always on target audience, prototyping, user flow definition and creating a visually beautiful and user-friendly products."
                };

            function et() {
                var e = Object(g.a)().formatMessage,
                    t = {
                        dots: !0,
                        speed: 500,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: !0,
                        nextArrow: s.a.createElement(_e, null),
                        prevArrow: s.a.createElement(He, null),
                        responsive: [{
                            breakpoint: 1100,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    };
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: ""
                }, s.a.createElement("div", {
                    className: "px-3 pt-5 mt-5"
                }, s.a.createElement("div", {
                    className: "text-center"
                }, s.a.createElement("h2", {
                    className: "display-3 text-black mb-2 font-weight-bold"
                }, e(Fe)), s.a.createElement("p", {
                    className: "font-size-xl mb-0 mb-lg-5 text-black-50"
                }, e(qe))), s.a.createElement(Me.a, Object.assign({}, t, {
                    className: "slider-arrows-outside mb-5 slider-arrows-dark slider-dots-outside"
                }), s.a.createElement("div", null, s.a.createElement(ke.a, {
                    className: "m-4"
                }, s.a.createElement(Oe.a, null, s.a.createElement("div", {
                    className: "d-flex flex-column align-items-center"
                }, s.a.createElement(ke.a, {
                    className: "card-transparent"
                }, s.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "card-img-wrapper rounded"
                }, s.a.createElement("img", {
                    src: Re.a,
                    className: "card-img-top rounded-circle",
                    style: {
                        width: 120
                    },
                    alt: "Peter Girr"
                }))), s.a.createElement("div", {
                    className: "font-size-xl font-weight-bold mt-3 centered"
                }, "Peter Girr"), s.a.createElement("div", {
                    className: "font-size-md mt-0 centered"
                }, e(Ve)), s.a.createElement(l.a, {
                    icon: ["fas", "lightbulb"],
                    className: "text-primary font-size-xxl mt-3"
                }), s.a.createElement("blockquote", {
                    className: "mt-3 text-black-50"
                }, e(Ge)), s.a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-linkedin hover-scale-lg",
                    href: "https://www.linkedin.com/in/peter-girr-7415ab67/"
                }, s.a.createElement(l.a, {
                    icon: ["fab", "linkedin"],
                    className: "font-size-xxl"
                })))))), s.a.createElement("div", null, s.a.createElement(ke.a, {
                    className: "m-4"
                }, s.a.createElement(Oe.a, null, s.a.createElement("div", {
                    className: "d-flex flex-column align-items-center"
                }, s.a.createElement(ke.a, {
                    className: "card-transparent"
                }, s.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "card-img-wrapper rounded"
                }, s.a.createElement("img", {
                    src: De.a,
                    className: "card-img-top rounded-circle",
                    style: {
                        width: 120
                    },
                    alt: "Aaron Hanson"
                }))), s.a.createElement("div", {
                    className: "font-size-xl font-weight-bold mt-3 centered"
                }, "Aaron Hanson"), s.a.createElement("div", {
                    className: "font-size-md mt-0 centered"
                }, e(Be)), s.a.createElement(l.a, {
                    icon: ["fas", "code-branch"],
                    className: "text-primary font-size-xxl mt-3"
                }), s.a.createElement("blockquote", {
                    className: "mt-3 text-black-50"
                }, e(Ye)), s.a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-linkedin hover-scale-lg",
                    href: "https://www.linkedin.com/in/ildiscgolfer/"
                }, s.a.createElement(l.a, {
                    icon: ["fab", "linkedin"],
                    className: "font-size-xxl"
                })))))), s.a.createElement("div", null, s.a.createElement(ke.a, {
                    className: "m-4"
                }, s.a.createElement(Oe.a, null, s.a.createElement("div", {
                    className: "d-flex flex-column align-items-center"
                }, s.a.createElement(ke.a, {
                    className: "card-transparent"
                }, s.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "card-img-wrapper rounded"
                }, s.a.createElement("img", {
                    src: Pe.a,
                    className: "card-img-top rounded-circle",
                    style: {
                        width: 120
                    },
                    alt: "Vitally Marinchenko"
                }))), s.a.createElement("div", {
                    className: "font-size-xl font-weight-bold mt-3 centered"
                }, "Vitally Marinchenko"), s.a.createElement("div", {
                    className: "font-size-md mt-0 centered"
                }, e(Qe)), s.a.createElement(l.a, {
                    icon: ["fas", "keyboard"],
                    className: "text-primary font-size-xxl mt-3"
                }), s.a.createElement("blockquote", {
                    className: "mt-3 text-black-50"
                }, e(Xe)), s.a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-linkedin hover-scale-lg",
                    href: "https://www.linkedin.com/in/vitallymarinchenko/"
                }, s.a.createElement(l.a, {
                    icon: ["fab", "linkedin"],
                    className: "font-size-xxl"
                })))))), s.a.createElement("div", null, s.a.createElement(ke.a, {
                    className: "m-4"
                }, s.a.createElement(Oe.a, null, s.a.createElement("div", {
                    className: "d-flex flex-column align-items-center"
                }, s.a.createElement(ke.a, {
                    className: "card-transparent"
                }, s.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "card-img-wrapper rounded"
                }, s.a.createElement("img", {
                    src: Le.a,
                    className: "card-img-top rounded-circle",
                    style: {
                        width: 120
                    },
                    alt: "Rene von Mangoldt"
                }))), s.a.createElement("div", {
                    className: "font-size-xl font-weight-bold mt-3 centered"
                }, "Rene von Mangoldt"), s.a.createElement("div", {
                    className: "font-size-md mt-0 centered"
                }, e(Ze)), s.a.createElement(l.a, {
                    icon: ["fas", "atom"],
                    className: "text-primary font-size-xxl mt-3"
                }), s.a.createElement("blockquote", {
                    className: "mt-3 text-black-50"
                }, e(Je)))))), s.a.createElement("div", null, s.a.createElement(ke.a, {
                    className: "m-4"
                }, s.a.createElement(Oe.a, null, s.a.createElement("div", {
                    className: "d-flex flex-column align-items-center"
                }, s.a.createElement(ke.a, {
                    className: "card-transparent"
                }, s.a.createElement("a", {
                    href: "#/",
                    onClick: function(e) {
                        return e.preventDefault()
                    },
                    className: "card-img-wrapper rounded"
                }, s.a.createElement("img", {
                    src: je.a,
                    className: "card-img-top rounded-circle",
                    style: {
                        width: 120
                    },
                    alt: "Sam"
                }))), s.a.createElement("div", {
                    className: "font-size-xl font-weight-bold mt-3 centered"
                }, "Samir Zalcevic"), s.a.createElement("div", {
                    className: "font-size-md mt-0 centered"
                }, e(Ke)), s.a.createElement(l.a, {
                    icon: ["fas", "paint-brush"],
                    className: "text-primary font-size-xxl mt-3"
                }), s.a.createElement("blockquote", {
                    className: "mt-3 text-black-50"
                }, e($e)), s.a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    className: "px-2 text-linkedin hover-scale-lg",
                    href: "https://www.linkedin.com/in/samir-zalcevic/"
                }, s.a.createElement(l.a, {
                    icon: ["fab", "linkedin"],
                    className: "font-size-xxl"
                }))))))))))
            }
            var tt = a(849),
                at = Object(r.lazy)((function() {
                    return a.e(3).then(a.bind(null, 847))
                })),
                nt = {
                    id: "app.labels.connectWallet",
                    defaultMessage: "Connect your wallet"
                },
                rt = {
                    id: "app.labels.usingTheWise",
                    defaultMessage: "Using the WISE dashboard, you can use supported assets for WISE reservations and WISE staking."
                },
                st = {
                    id: "app.labels.fundsCollected",
                    defaultMessage: "Funds collected for WISE reservations are managed by the Uniswap protocol and used to form the initial liquidity pool for future trading."
                },
                it = {
                    id: "app.labels.wiseDashboard",
                    defaultMessage: "Wise Dashboard"
                },
                lt = {
                    id: "app.labels.tealPaper",
                    defaultMessage: "Teal Paper"
                },
                ot = {
                    id: "app.labels.quickWiseReservation",
                    defaultMessage: "Quick WISE Reservation"
                };

            function ct() {
                var e = Object(g.a)().formatMessage,
                    t = Object(r.useState)(!1),
                    a = Object(n.a)(t, 2),
                    i = a[0],
                    p = a[1];
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: "hero-wrapper bg-composed-wrapper bg-midnight-bloom"
                }, s.a.createElement("div", {
                    className: "hero-wrapper--content flex-column"
                }, s.a.createElement("div", {
                    className: "shape-container-bottom-2 w-100"
                }, s.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1440 320"
                }, s.a.createElement("path", {
                    fill: "var(--white)",
                    fillOpacity: "1",
                    d: "M0,288L34.3,250.7C68.6,213,137,139,206,144C274.3,149,343,235,411,229.3C480,224,549,128,617,101.3C685.7,75,754,117,823,122.7C891.4,128,960,96,1029,112C1097.1,128,1166,192,1234,186.7C1302.9,181,1371,107,1406,69.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                }))), s.a.createElement("div", {
                    className: "bg-composed-wrapper--image bg-composed-filter-rm",
                    style: {
                        backgroundImage: "url(" + m.a + ")"
                    }
                }), s.a.createElement("div", {
                    className: "bg-composed-wrapper--bg bg-second opacity-5"
                }), s.a.createElement("div", {
                    className: "bg-composed-wrapper--content"
                }, s.a.createElement(o.a, {
                    className: "z-over shadow-container-content-5"
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6,
                    className: "py-5"
                }, s.a.createElement(c.a, {
                    item: !0,
                    lg: 6
                }, s.a.createElement("div", {
                    className: "text-center text-lg-left py-0 pr-0 pr-xl-3 py-xl-5"
                }, s.a.createElement("div", {
                    className: "pr-0 pr-xl-5 text-white"
                }, s.a.createElement("h2", {
                    className: "display-2 mb-3 mt-5 font-weight-bold"
                }, e(nt)), s.a.createElement("p", {
                    className: "font-size-xxl m-0 py-3 text-white-50"
                }, e(rt)), s.a.createElement("p", {
                    className: "font-size-xxl m-0 py-3 text-white-50"
                }, e(st)), s.a.createElement("p", {
                    className: "font-size-lg m-0 py-2 text-white opacity-7"
                }), s.a.createElement("div", {
                    className: "d-block mt-4"
                }, s.a.createElement(d.a, {
                    href: "/personal",
                    target: "_blank",
                    size: "large",
                    className: "rounded-sm font-weight-bold shadow-second-sm btn-primary btn-hover-teal hover-scale-sm"
                }, s.a.createElement("span", {
                    className: "btn-wrapper--label"
                }, e(it)), s.a.createElement("span", {
                    className: "btn-wrapper--icon"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "arrow-right"]
                }))), s.a.createElement(d.a, {
                    href: "/teal",
                    target: "_blank",
                    size: "large",
                    className: "rounded-sm bg-white-10 text-white ml-3 hover-scale-sm"
                }, s.a.createElement("span", null, e(lt))))))), s.a.createElement(c.a, {
                    item: !0,
                    lg: 6,
                    className: "align-items-center d-none d-lg-block"
                }, s.a.createElement("div", {
                    className: "MuiPaper-root MuiCard-root rounded-sm shadow-none mt-5 mt-lg-0 p-3 bg-white-10 MuiPaper-MuiPaper-rounded"
                }, s.a.createElement(tt.default, {
                    headerText: e(ot),
                    defaultText: "Reserve Wise",
                    selectedDays: null
                })))))), s.a.createElement("div", {
                    className: "shape-container-top-1 w-100"
                }, s.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1440 320"
                }, s.a.createElement("path", {
                    fill: "#070919",
                    fillOpacity: "1",
                    d: "M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,202.7C672,213,768,235,864,213.3C960,192,1056,128,1152,133.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                }))))), s.a.createElement(u.a, {
                    open: i,
                    onClose: function() {
                        p(!i)
                    },
                    classes: {
                        paper: "shadow-lg rounded"
                    }
                }, s.a.createElement(r.Suspense, {
                    fallback: function() {
                        return ""
                    }
                }, s.a.createElement(at, null))))
            }
            var dt = a(120),
                ut = {
                    id: "app.labels.earnCommissions",
                    defaultMessage: "Earn commissions for promoting WISE!"
                },
                pt = {
                    id: "app.labels.theWiseContractHas",
                    defaultMessage: "The WISE contract has a direct, one-level referral system that rewards both the referrer and referee when a user reserves WISE tokens."
                };

            function mt() {
                var e = Object(g.a)().formatMessage;
                return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    className: "hero-wrapper bg-composed-wrapper bg-midnight-bloom"
                }, s.a.createElement("div", {
                    className: "hero-wrapper--content"
                }, s.a.createElement("div", {
                    className: "bg-composed-wrapper--image bg-composed-filter-rm",
                    style: {
                        backgroundImage: "url(" + m.a + ")"
                    }
                }), s.a.createElement("div", {
                    className: "bg-composed-wrapper--bg bg-second opacity-5"
                }), s.a.createElement("div", {
                    className: "bg-composed-wrapper--content"
                }, s.a.createElement(o.a, {
                    className: "py-5 z-over",
                    style: {
                        marginBottom: "-300px"
                    }
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6,
                    className: "text-center text-white pt-2 pb-4"
                }, s.a.createElement(c.a, {
                    item: !0,
                    lg: 10,
                    xl: 8,
                    className: "mx-auto p-0"
                }, s.a.createElement("h2", {
                    className: "display-2 font-weight-bold my-4 mx-0 px-0"
                }, e(ut)), s.a.createElement("p", {
                    className: "text-white-50 line-height-2 font-size-xxl px-3 px-xl-5 mb-0"
                }, e(pt)))), s.a.createElement(c.a, {
                    container: !0,
                    spacing: 0,
                    className: "z-over justify-content-center mb-5 mb-lg-1"
                }, s.a.createElement(c.a, {
                    item: !0,
                    lg: 6,
                    className: "d-flex align-items-center mb-5 mb-lg-9"
                }, s.a.createElement(ke.a, {
                    className: "text-white w-100 pt-3 pt-lg-5 mb-5 mb-lg-0 bg-plum-plate rounded"
                }, s.a.createElement(dt.b, {
                    view: "referral"
                }))))), s.a.createElement("div", {
                    className: "shape-container-top-2"
                }, s.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1440 320"
                }, s.a.createElement("path", {
                    fill: "var(--white)",
                    fillOpacity: "1",
                    d: "M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                })))))))
            }
            var ft = a(790),
                bt = a(729),
                ht = a(993),
                gt = a(980);

            function yt(e) {
                var t = e.children,
                    a = e.value,
                    n = e.index,
                    r = Object(ft.a)(e, ["children", "value", "index"]);
                return s.a.createElement(bt.a, Object.assign({
                    component: "div",
                    role: "tabpanel",
                    hidden: a !== n
                }, r), a === n && s.a.createElement("div", null, t))
            }
            var vt = {
                    id: "app.labels.wiseOverview",
                    defaultMessage: "WISE Overview"
                },
                Et = {
                    id: "app.labels.howWiseWork",
                    defaultMessage: "How WISE Works"
                },
                wt = {
                    id: "app.labels.cryptoTrifectaSolved",
                    defaultMessage: "Crypto Trifecta Solved"
                },
                xt = {
                    id: "app.labels.promoteWise",
                    defaultMessage: "Promote WISE for Rewards"
                },
                St = {
                    id: "app.labels.reserveWise",
                    defaultMessage: "Reserve WISE"
                },
                Nt = {
                    id: "app.labels.wiseHas50",
                    defaultMessage: "WISE has a 50 day launch period for investors to reserve WISE. Each\n        day of launch, about 5 Million WISE are available, which are distributed\n        proportionately according to the amount of total ETH sent for that day."
                },
                Tt = {
                    id: "app.labels.stakeWise",
                    defaultMessage: "Stake WISE"
                },
                kt = {
                    id: "app.labels.lookUpYourWise",
                    defaultMessage: "Lock up your WISE in order to earn interest over the duration. The\n        longer you stake, the more interest you earn. You may access interest\n        at any time for no fee, but ending a stake early penalizes the\n        principal. All fees and penalties are redistributed to other stakers."
                },
                Ot = {
                    id: "app.labels.sellWise",
                    defaultMessage: "Sell WISE"
                },
                Ct = {
                    id: "app.labels.cashOut",
                    defaultMessage: "Cash out instantly using the Uniswap DEX. While other projects rely\n        on users to slowly build markets for their tokens, the very nature\n        of the WISE contract includes the instant creation of a massive pool\n        of liquidity on Uniswap, featuring no KYC and the ability to swap\n        from your private wallet."
                },
                Mt = {
                    id: "app.labels.security",
                    defaultMessage: "Security"
                },
                It = {
                    id: "app.labels.wiseIsMade",
                    defaultMessage: "WISE is made up of immutable smart contracts that are audited\n        for errors and loopholes. Investors may have peace of mind,\n        knowing the contract will do what it says, and cannot be changed.\n        Additionally, all transactions including staking are performed\n        from the safety of your own private wallet."
                },
                jt = {
                    id: "app.labels.decentralization",
                    defaultMessage: "Decentralization"
                },
                Wt = {
                    id: "app.labels.wiseIsNone",
                    defaultMessage: "WISE is a non profit project. It sends 90% or more of the launch\n        money to Uniswap, forming a giant liquidity pool for trading.\n        All this is done by the contract, without ever having middlemen\n        or central controlling parties. Upon launch, even the WISE founders\n        are on a level playing field with all investors."
                },
                Rt = {
                    id: "app.labels.scalability",
                    defaultMessage: "Scalability"
                },
                At = {
                    id: "app.labels.wiseHasAll",
                    defaultMessage: "WISE has all the benefits of the ERC20 ecosystem, including massive\n        scalability. Since investors pay their own weight in gas fees every\n        time they interact with the contract, WISE has virtually unlimited\n        growth potential while only costing a few cents every transaction."
                },
                Dt = {
                    id: "app.labels.referralLinks",
                    defaultMessage: "Referral Links"
                },
                Ut = {
                    id: "app.labels.useReferralLink",
                    defaultMessage: "Use a referral link to gain a 10% ETH bonus when reserving WISE,\n        along with 10% extra staking power. Being a promoter for referrals\n        generates a small bonus for referring 1 ETH, and larger commissions\n        for 50 ETH or more referred."
                },
                Pt = {
                    id: "app.labels.launchPhase",
                    defaultMessage: "Launch Phase"
                },
                zt = {
                    id: "app.labels.allPromoters",
                    defaultMessage: "All promoters that refer 50 or more ETH during launch will receive\n        a 10% commission paid out in WISE tokens. Referrals are direct,\n        without any multi-level aspects. Commissions are available immediately\n        after launch to be staked or instantly swapped for ETH on Uniswap."
                },
                Lt = {
                    id: "app.labels.stakingReferrals",
                    defaultMessage: "Staking Referrals"
                },
                _t = {
                    id: "app.labels.afterLaunch",
                    defaultMessage: "After launch, promoters may continue to advertise in order to gain\n        residual income each time WISE is staked using their referral link.\n        This income rewards promoters similar to the way stakers earn interest,\n        and the interest generation stops for both parties once the stake ends."
                };

            function Ht() {
                var e = Object(r.useState)("btn-primary"),
                    t = Object(n.a)(e, 2),
                    a = t[0],
                    i = t[1],
                    u = Object(r.useState)(0),
                    p = Object(n.a)(u, 2),
                    m = p[0],
                    f = p[1],
                    b = Object(g.a)(),
                    h = function(e) {
                        f(e), i(0 === e ? "btn-primary" : "btn-neutral-primary")
                    };
                return s.a.createElement(s.a.Fragment, null, s.a.createElement(o.a, null, s.a.createElement("div", {
                    className: "pr-0 pr-xl-5 text-center"
                }, s.a.createElement("h2", {
                    className: "display-3 mb-0 mt-4 pt-5 pt-lg-2 font-weight-bold text-black",
                    id: "overview"
                }, b.formatMessage(vt))), s.a.createElement(c.a, {
                    container: !0,
                    spacing: 6,
                    className: "pt-2"
                }, s.a.createElement(c.a, {
                    item: !0,
                    lg: 12
                }, s.a.createElement(ke.a, {
                    className: "card-box"
                }, s.a.createElement("div", {
                    className: "tabs-bordered p-4"
                }, s.a.createElement(ht.a, {
                    className: "nav-tabs-primary d-none d-lg-block",
                    value: m,
                    variant: "fullWidth",
                    onChange: function(e, t) {
                        f(t)
                    }
                }, s.a.createElement(gt.a, {
                    label: b.formatMessage(Et)
                }), s.a.createElement(gt.a, {
                    label: b.formatMessage(wt)
                }), s.a.createElement(gt.a, {
                    label: b.formatMessage(xt)
                })), s.a.createElement("div", {
                    className: "d-block d-lg-none"
                }, s.a.createElement(d.a, {
                    onClick: function() {
                        h(0)
                    },
                    className: "".concat(a, " w-100 my-2 font-size-lg")
                }, b.formatMessage(Et)), s.a.createElement(d.a, {
                    onClick: function() {
                        h(1)
                    },
                    className: "btn-neutral-primary w-100 my-2 font-size-lg"
                }, b.formatMessage(wt)), s.a.createElement(d.a, {
                    onClick: function() {
                        h(2)
                    },
                    className: "btn-neutral-primary w-100 my-2 font-size-lg"
                }, b.formatMessage(xt))))))), s.a.createElement("div", {
                    className: "p-4 pt-0"
                }, s.a.createElement(yt, {
                    value: m,
                    index: 0
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 3
                }, s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-wise text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-wise text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "shopping-cart"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(St)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(Nt)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-2",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-wise",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))), s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-primary text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-primary text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "hourglass-half"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(Tt)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(kt)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-3-5",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))), s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-wise text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-wise text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "exchange-alt"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(Ot)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(Ct)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-3-1",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-wise",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))))), s.a.createElement(yt, {
                    value: m,
                    index: 1
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 3
                }, s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-wise text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-wise text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "lock"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(Mt)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(It)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-7-3",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-wise",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))), s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-primary text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-primary text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "users"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(jt)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(Wt)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-1-3",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))), s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-wise text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-wise text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "expand-arrows-alt"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(Rt)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(At)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-4",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-wise",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))))), s.a.createElement(yt, {
                    value: m,
                    index: 2
                }, s.a.createElement(c.a, {
                    container: !0,
                    spacing: 3
                }, s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-wise text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-wise text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "share"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(Dt)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(Ut)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-3-1",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-wise",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))), s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box card-box-border-top br-tl br-tr border-primary text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-primary text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "rocket"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(Pt)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(zt)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-2-3",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-primary",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))), s.a.createElement(c.a, {
                    item: !0,
                    md: 4,
                    xl: 4
                }, s.a.createElement("div", {
                    className: "card bg-white h-100 card-box h-360 card-box-border-top br-tl br-tr border-wise text-center pt-3 px-3 pt-xl-4 px-xl-4 d-block"
                }, s.a.createElement("div", {
                    className: "d-50 btn-icon rounded-circle bg-wise text-white mb-4 mx-auto border-top-teal-hover"
                }, s.a.createElement(l.a, {
                    icon: ["fas", "share-alt"],
                    className: "font-size-xl"
                })), s.a.createElement("h5", {
                    className: "font-weight-bold font-size-xl text-second mb-0"
                }, b.formatMessage(Lt)), s.a.createElement("p", {
                    className: "text-second opacity-8 mt-3 mb-4"
                }, b.formatMessage(_t)), s.a.createElement("div", {
                    className: "card-tr-actions"
                }, s.a.createElement("a", {
                    href: "/docs#sec-2-3-5-5",
                    target: "_blank"
                }, s.a.createElement(d.a, {
                    className: "p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-wise",
                    variant: "outlined"
                }, s.a.createElement(l.a, {
                    icon: ["far", "question-circle"],
                    className: "font-size-sm"
                })))))))))))
            }
            var Ft = a(116),
                qt = a(117);

            function Vt() {
                i.a.initialize("UA-168804464-1"), i.a.pageview(window.location.pathname + window.location.search);
                var e = Object(L.b)().connector,
                    t = s.a.useState(),
                    a = Object(n.a)(t, 2),
                    l = a[0],
                    o = a[1];
                Object(r.useEffect)((function() {
                    console.log("Wallet running"), l && l === e && o(void 0)
                }), [l, e]);
                var c = Object(Ft.a)();
                return Object(qt.a)(!c || !!l), s.a.createElement("div", {
                    style: {
                        width: "100%",
                        overflowX: "hidden"
                    }
                }, s.a.createElement(T, null), s.a.createElement(Ht, null), s.a.createElement(D, null), s.a.createElement(V, null), s.a.createElement(Ne, null), s.a.createElement(J, null), s.a.createElement(mt, null), s.a.createElement(et, null), s.a.createElement(ct, null), s.a.createElement(Te.a, null))
            }
        }
    }
]);