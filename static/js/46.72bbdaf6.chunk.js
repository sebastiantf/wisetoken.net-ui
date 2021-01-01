(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
    [46], {
        995: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return Ze
            }));
            var l = a(25),
                n = a(0),
                r = a.n(n),
                s = a(749),
                c = a(9),
                i = a(726),
                o = a(18),
                m = a(35),
                E = a(6),
                u = a(7),
                d = a(11),
                h = a(12),
                p = a(763),
                f = a(91),
                b = a.n(f),
                y = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(E.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.scrollToHashId()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.scrollToHashId()
                        }
                    }, {
                        key: "scrollToHashId",
                        value: function() {
                            var e = this.removeHash,
                                t = window.location.hash.substring(1);
                            t && t.length && setTimeout(window.requestAnimationFrame((function() {
                                document.getElementById(t).scrollIntoView(), e()
                            })), 0)
                        }
                    }, {
                        key: "removeHash",
                        value: function() {
                            var e = window.location,
                                t = window.history;
                            if (t && "pushState" in t) t.replaceState("", document.title, e.pathname + e.search);
                            else {
                                var a = document.body.scrollTop,
                                    l = document.body.scrollLeft;
                                e.hash = "", document.body.scrollTop = a, document.body.scrollLeft = l
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement(b.a, null, r.a.createElement("div", {
                                className: "docs-overflow-visible"
                            }, r.a.createElement("div", {
                                className: "card-header rounded-0 bg-white px-0 px-lg-3 py-1 border-bottom"
                            }, r.a.createElement(p.a, {
                                className: "d-block text-center py-2 text-sm-left align-items-center justify-content-between docs"
                            }, r.a.createElement("section", {
                                className: "text-center"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-center"
                            }, r.a.createElement("h1", null, "WISE Token Documentation"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1"
                            }, "1"), "\xa0\xa0Introduction")), r.a.createElement("p", null, r.a.createElement("strong", null, "WISE Token"), ", hereinafter referred to as ", r.a.createElement("strong", null, "WISE"), ", is an ERC-20 compliant smart contract designed for deployment on the Ethereum blockchain. WISE is a decentralized,\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "fairly launched"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "automatically liquid"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "trustlessly exchangeable"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "interest-bearing"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-1-1"
                            }, "bond-like"), " token."), r.a.createElement("p", null, "This document is a general technical specification of the WISE contract and its functionality."), r.a.createElement("p", null, "Mainnet launch of the WISE contract is scheduled for ", r.a.createElement("span", {
                                className: "nowrap"
                            }, "October 8, 2020"), ".")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-1-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1-1"
                            }, "1.1"), "\xa0\xa0WISE Token Purpose")), r.a.createElement("p", null, "The core purpose of the WISE token \u2014 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "staking"), " \u2014 is similar to both bonds and CDs (certificates of deposit): rewarding the holder with earned interest in exchange for locking up their funds for a period of time. WISE incorporates some of the features from both of these traditional instruments but improves greatly upon them."), r.a.createElement("p", null, r.a.createElement("strong", null, "CDs"), " tend to be lower risk, lower return, and only pay out interest on their maturity date."), r.a.createElement("p", null, r.a.createElement("strong", null, "Bonds"), " tend to be somewhat higher risk, higher return, and pay out interest regularly on a set schedule (typically every six months)."), r.a.createElement("p", null, r.a.createElement("strong", null, "WISE"), " is most similar to a bond, in that it earns relatively high interest, but allows users to withdraw it whenever they want."), r.a.createElement("strong", null, "WISE is superior to bonds and CDs in every way:"), r.a.createElement("p", null, "WISE gives the staker complete flexibility in choosing exactly when to\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-3"
                            }, "withdraw their interest"), " during the life of the stake. You can withdraw interest daily, irregularly, wait until maturity, or whatever you like!"), r.a.createElement("p", null, "WISE stakes have higher return, much lower risk (due to being decentralized and trustless), and far higher flexibility than both bonds and CDs. No more trusting banks and governments to stay solvent and not change their rules. No more worrying that a bond issuer may default on you."), r.a.createElement("p", null, "WISE is pure, immutable code.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-1-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1-2"
                            }, "1.2"), "\xa0\xa0The Wise Foundation")), r.a.createElement("p", null, "The Wise Foundation is an unincorporated nonprofit association formed in February 2020. The WISE contract and various ", r.a.createElement("a", {
                                href: "/docs#sec-3"
                            }, "related software and websites"), " are being wholly funded and developed by The Wise Foundation."), r.a.createElement("p", null, "The Wise Foundation is dedicated to providing material through which anyone may understand the contract in depth. This is an important step towards fostering a high level of trust in the contract source code and its functionality, as not everyone has the means or will to digest the code."), r.a.createElement("p", null, "The WISE contract source code will be made public on", r.a.createElement("a", {
                                href: "https://github.com/wise-foundation"
                            }, "our Github"), " at launch. ", r.a.createElement("a", {
                                href: "/docs#sec-7-3"
                            }, "A paid, professional audit of the WISE contract source code has been completed and included in this document"), "."), r.a.createElement("p", null, "If you have any questions, or would like to discuss the project with the founders, developers, and the rest of the community, please join the official WISE Telegram group at ", r.a.createElement("a", {
                                href: "https://t.me/WiseToken"
                            }, "t.me/WiseToken"), ". We welcome all interested, respectful parties to our humble community. For various news releases related to WISE, please join the WiseTokenNews Telegram channel at ", r.a.createElement("a", {
                                href: "https://t.me/WiseTokenNews"
                            }, "t.me/WiseTokenNews"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-1-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1-3"
                            }, "1.3"), "\xa0\xa0Motivations and Principles")), r.a.createElement("p", null, "Trusting your money in the custody of other humans is inherently risky. This glaring flaw in traditional financial instruments is a primary motivation for developing WISE. The WISE contract aims to ensure that a user can always be in full custody and control of their WISE tokens, even during the course of various economic activities."), r.a.createElement("p", null, "The ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "initial minting of WISE"), ", earning\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3"
                            }, "referral bonuses"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-1"
                            }, "opening"), " and ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "closing stakes"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "receiving interest"), ", and even\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "selling WISE for ETH or other tokens"), "\xa0 can all be done end-to-end without the user's WISE tokens ever being under the control of another person or system. Compare this to the world of banks you can('t) trust and traditional money managers that (don't) have your best interests at heart."), r.a.createElement("p", null, "One very important aspect of owning cryptocurrencies is having a place to safely, easily, and quickly trade them when the need arises. We believe Uniswap, a popular and highly regarded decentralized exchange (DEX) smart contract on Ethereum, is such a place. Following the fifty day ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "Liquidity Transformer Epoch"), ", the WISE contract will automatically, trustlessly, and irrevocably ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "bootstrap its own initial liquidity pool on Uniswap"), ". At least 90% of all ETH sent by users to the WISE contract during the LT Epoch will in turn be automatically transferred to Uniswap by the WISE contract, along with an amount of minted WISE in equal value."), r.a.createElement("p", null, "In exchange for and simultaneous to this liquidity pool deposit, Uniswap transfers to the WISE contract an appropriate amount of UNI liquidity tokens, which carry the sole power to later withdraw that liquidity pool. The WISE contract will automatically, immediately, and provably destroy these UNI tokens by transferring them to a known burn address. In doing so, the WISE contract ensures that this initial ETH/WISE liquidity pool cannot be withdrawn from Uniswap by any person, party, contract, or entity \u2014 for all eternity."), r.a.createElement("p", null, "The WISE contract also allows users to earn interest on WISE token time deposits called ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "stakes"), ", which are most similar to bonds, but more flexible. A stake earns interest like a bond, but with the added feature of allowing interest withdrawals at any time during the life of the stake; not something bonds allow. These bond-like interest-bearing stakes in WISE are always fully in the custody of the user and their wallet, never held, influenced, or able to be confiscated by any third party.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2"
                            }, "2"), "\xa0\xa0WISE Contract Functionality")), r.a.createElement("p", null, "The WISE contract has several key properties and core functions, outlined in detail in the following sections. Some of the important mathematical calculations and data structures are also presented here. Various example scenarios of user and multi-user activity and contract state evolution are illustrated where appropriate.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-2-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-1"
                            }, "2.1"), " General Properties")), r.a.createElement("p", null, "The contract defines the token name as ", r.a.createElement("code", null, '"WISE Token"'), ", the token symbol as ", r.a.createElement("code", null, '"WISE"'), ", and the number of decimals as", r.a.createElement("code", null, "18"), "."), r.a.createElement("p", null, "The base unit of WISE is called ", r.a.createElement("code", null, "YODA"), ". One WISE is composed of one quintillion (1 \xd7 10", r.a.createElement("sup", null, "18"), ") YODA."), r.a.createElement("p", null, "Time is tracked by the contract in whole day increments, beginning at Day", r.a.createElement("code", null, "0"), ", which starts at the midnight UTC preceding the contract deployment. The individual days used for the ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "LT Epoch"), " will be higher day numbers in the code, rather than literally being day numbers 1\u201350."), r.a.createElement("p", null, "The contract has no special functionality granted to the deploying account, no administrative keys, and no concept of a contract owner. All users, including the founders and developers, have precisely equal access to the contract's functionality."), r.a.createElement("p", null, "The contract, once deployed, is immutable. No proxy or delegate contracts are involved.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-1-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-1-1"
                            }, "2.1.1"), " Token Supply")), r.a.createElement("p", null, "The contract has no set token supply. The total initial supply minted by users through the ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "Liquidity Transformer"), " will fall within a defined range, determined partially by confined randomness, and partially by ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3"
                            }, "referral bonuses"), "."), r.a.createElement("p", null, "The 50 day Liquidity Transformer has an average of five million WISE available each day, though some days have randomness involved. This means the total supply available in the LT will likely be around 250 million WISE. Due to referrer bonuses, there could be up to an additional 10% minted on top of that (i.e. up to 25 million more)."), r.a.createElement("p", null, "This total supply is then matched by a minted batch that is then ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "sent permanently to Uniswap"), ". The amount of WISE sent to Uniswap will be up to 10% less than what was mintable through the LT and referral bonuses, due to the foundation reimbursement ETH. Regardless, the ratio of WISE/ETH sent to Uniswap will match exactly the ratio of mintable LT WISE (including referral bonus WISE) to LT ETH. This ensures that the initial Uniswap price matches the overall price of the LT."), r.a.createElement("p", null, "The total supply of WISE in existence after the LT and Uniswap provision is subject to LT randomness, referral activity, and whether the foundation reimbursement ends up being a full 10% or less due to the hardcoded cap."), r.a.createElement("p", null, "For example, if we assume the randomness averages out, assume half of all possible referrer bonuses are earned, and assume the foundation reimbursement cap causes it to be only 5% of the LT ETH, then the total initial supply would be:"), r.a.createElement("pre", null, r.a.createElement("code", null, "baseLTSupply = 250,000,000 WISE", r.a.createElement("br", null), "referrerBonuses = baseLTSupply * 5% = 12,500,000 WISE", r.a.createElement("br", null), "totalLTSupply = baseLTSupply + referrerBonuses = 262,500,000 WISE", r.a.createElement("br", null), "uniswapBatch = totalLTSupply * 95% = 249,375,000 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "totalInitialSupply = totalLTSupply + uniswapBatch = 511,875,000 WISE")), r.a.createElement("p", null, "Though extremely unlikely (virtually impossible), the absolute minimum possible total initial supply (all random days get their minimum values, no referral bonuses, and a low enough LT ETH total that makes the foundation reimbursement exactly 10%) would be:"), r.a.createElement("pre", null, r.a.createElement("code", null, "baseLTSupply = 180,000,010 WISE", r.a.createElement("br", null), "referrerBonuses = baseLTSupply * 0% = 0 WISE", r.a.createElement("br", null), "totalLTSupply = baseLTSupply + referrerBonuses = 180,000,010 WISE", r.a.createElement("br", null), "uniswapBatch = totalLTSupply * 90% = 162,000,009 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "totalInitialSupply = totalLTSupply + uniswapBatch = 342,000,019 WISE")), r.a.createElement("p", null, "Though equally unlikely (virtually impossible), the absolute maximum possible total initial supply (all random days get their maximum values, maximum referral bonuses, and a high LT ETH total that makes the foundation reimbursement approach 0%) would be:"), r.a.createElement("pre", null, r.a.createElement("code", null, "baseLTSupply = 319,999,990 WISE", r.a.createElement("br", null), "referrerBonuses = baseLTSupply * 10% = 31,999,999 WISE", r.a.createElement("br", null), "totalLTSupply = baseLTSupply + referrerBonuses = 351,999,989 WISE", r.a.createElement("br", null), "uniswapBatch = totalLTSupply * ~100% = 351,999,989 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "totalInitialSupply = totalLTSupply + uniswapBatch = 703,999,978 WISE")), r.a.createElement("p", null, "The total token supply will ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-4"
                            }, "inflate at a rate of 4% per year"), ", starting once the Liquidity Transformer Epoch ends and the ", r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "Circulation Epoch"), " begins. Some of the new tokens will be minted directly to stakers upon ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "closing a stake"), ", and some minted to ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "stake referrers"), ". If no stakes are closed on a given day, and no stakes scrape interest on that day,, no new tokens are actually minted that day, though they are earmarked to be minted later. Once a stake is closed, all tokens the stake had earmarked to it for all past days are then minted at once.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-2-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "2.2"), " Liquidity Transformer Epoch")), r.a.createElement("p", null, "The launch of the WISE contract will kick off an initial 50 day phase during which users may send ETH (or any ERC-20 token traded on Uniswap V2) to the contract in order to reserve WISE tokens. The tokens reserved can be ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "minted by the users"), " immediately following the end of the LT Epoch, i.e. the start of day 51."), r.a.createElement("p", null, "Each day of the LT Epoch will have an amount of WISE tokens that are reservable by all those who deposit ETH to that day. Most days will have exactly five million WISE available, but the other days will have their available WISE amount randomly set within a predefined range. These random amounts will be determined by the contract shortly after the end of each random day, by leveraging the ", r.a.createElement("a", {
                                href: "https://provable.xyz/"
                            }, "Provable"), " (formerly called \u201cOraclize\u201d) smart contract's Random Datasource interface. The generated randomness is delivered on-chain in a trustless and provably cryptographically secure manner. For more detailed information about Provable, please read their ", r.a.createElement("a", {
                                href: "https://provable.xyz/papers/random_datasource-rev1.pdf"
                            }, "random datasource white paper"), " and their ", r.a.createElement("a", {
                                href: "https://docs.provable.xyz/#security-deep-dive"
                            }, "security deep dive"), "."), r.a.createElement("p", null, "Each day's available WISE ends up getting split amongst the users who deposited ETH to that day, in direct proportion. In other words, a user that made a reservation on a particular LT day will later be able to mint the fraction of that day's available WISE that equals the fraction of the day's total ETH they personally sent in.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "2.2.1"), " Token Reservation")), r.a.createElement("p", null, "On any given day of the LT Epoch, users may choose to send ETH (or any ERC-20 token traded on Uniswap V2) to the contract and assign it to any of the LT Epoch days that have not yet concluded. We call this action a \u201ctoken reservation\u201d."), r.a.createElement("p", null, "For example, during day 12, users may send and assign ETH to any of the days 12\u201350, but not to days 1\u201311, since those days have already concluded."), r.a.createElement("p", null, "Each token reservation is assigned to a single day, but users may make as many such reservations as they wish, to as many different days as they wish."), r.a.createElement("p", null, "The WISE contract front end will also include the ability for a user to spread a single reservation amount of ETH (or ERC-20) evenly across all remaining LT days. This \u201cdollar cost averaging\u201d feature saves gas for the user who wishes to reserve an equal part of each LT day."), r.a.createElement("p", null, "Reservations can be made with ETH, but also with any ERC-20 token that's traded on Uniswap V2. This is done via direct integration with Uniswap, which swaps the ERC-20 for ETH as part of the reservation transaction. This is functionally the same as the users themselves swapping the ERC-20 for ETH on Uniswap, and then later sending the ETH to the WISE contract for a token reservation. The benefit of using the WISE reservation interface to do this is that it saves the user some gas fees and time."), r.a.createElement("p", null, "Each single token reservation must be of a minimum ETH amount, to make spam attacks cost-prohibitive. The specific minimum amount will be finalized at a later date, closer to launch. This is because the price of ETH may change significantly between the time of this writing and the contract launch. The minimum will likely be in the neighborhood of $10 worth of ETH."), r.a.createElement("p", null, "The contract will provide public interfaces for viewing the total amount of ETH currently assigned to each LT Epoch day across all users, as well as the total WISE available for each day (where that supply has been determined, in the case of random days). For days where the supply has not yet been finalized, the min/max range will also be retrievable from the contract.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-2"
                            }, "2.2.2"), " Daily LT Supply Schedule")), r.a.createElement("p", null, "Every LT day has an average of five million WISE available for reservation. Some of the days with randomly determined amounts have tight ranges only a few hundred million WISE in variance, and others are extremely variant, ranging from a single WISE to ten million WISE (technically 9,999,999 WISE, in order to preserve a strict average of five million per day). In this way, the LT Epoch provides various exciting options for users wishing to gamble with their ETH, and at various levels of risk/reward."), r.a.createElement("p", null, "The following table outlines how many WISE will be available for user reservation on each day of the LT Epoch. Most days have exactly five million WISE available. The rest show two supply values: the minimum and maximum available that day. Each day is color coded for relative risk level, from ", r.a.createElement("span", {
                                className: "no-risk"
                            }, "none"), " to ", r.a.createElement("span", {
                                className: "high-risk"
                            }, "high"), "):"), r.a.createElement("div", {
                                className: "table-container"
                            }, r.a.createElement("table", {
                                className: "cal"
                            }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "Sun"), r.a.createElement("th", null, "Mon"), r.a.createElement("th", null, "Tue"), r.a.createElement("th", null, "Wed"), r.a.createElement("th", null, "Thu"), r.a.createElement("th", null, "Fri"), r.a.createElement("th", null, "Sat"))), r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null), r.a.createElement("td", null), r.a.createElement("td", null), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 11", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 12", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 13", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 14", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 15", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 16", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 17", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk1"
                            }, "Nov 18", r.a.createElement("br", null), r.a.createElement("div", null, "5.5M", r.a.createElement("br", null), "4.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 19", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk1"
                            }, "Nov 20", r.a.createElement("br", null), r.a.createElement("div", null, "5.5M", r.a.createElement("br", null), "4.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 21", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Nov 22", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 23", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk2"
                            }, "Nov 24", r.a.createElement("br", null), r.a.createElement("div", null, "6M", r.a.createElement("br", null), "4M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 25", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk2"
                            }, "Nov 26", r.a.createElement("br", null), r.a.createElement("div", null, "6M", r.a.createElement("br", null), "4M")), r.a.createElement("td", {
                                className: "risk2"
                            }, "Nov 27", r.a.createElement("br", null), r.a.createElement("div", null, "6M", r.a.createElement("br", null), "4M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 28", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Nov 29", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 30", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk3"
                            }, "Dec 1", r.a.createElement("br", null), r.a.createElement("div", null, "6.5M", r.a.createElement("br", null), "3.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 2", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk3"
                            }, "Dec 3", r.a.createElement("br", null), r.a.createElement("div", null, "6.5M", r.a.createElement("br", null), "3.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 4", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk3"
                            }, "Dec 5", r.a.createElement("br", null), r.a.createElement("div", null, "6.5M", r.a.createElement("br", null), "3.5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 6", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 7", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 8", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk4"
                            }, "Dec 9", r.a.createElement("br", null), r.a.createElement("div", null, "7M", r.a.createElement("br", null), "3M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 10", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk4"
                            }, "Dec 11", r.a.createElement("br", null), r.a.createElement("div", null, "7M", r.a.createElement("br", null), "3M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 12", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 13", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 14", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk5"
                            }, "Dec 15", r.a.createElement("br", null), r.a.createElement("div", null, "7.5M", r.a.createElement("br", null), "2.5M")), r.a.createElement("td", {
                                className: "risk5"
                            }, "Dec 16", r.a.createElement("br", null), r.a.createElement("div", null, "7.5M", r.a.createElement("br", null), "2.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 17", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk5"
                            }, "Dec 18", r.a.createElement("br", null), r.a.createElement("div", null, "7.5M", r.a.createElement("br", null), "2.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 19", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 20", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 21", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 22", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 23", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 24", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 25", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 26", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 27", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 28", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 29", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 30", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))))))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-3"
                            }, "2.2.3"), "\xa0\xa0Reservation Referrals"), r.a.createElement("p", null, "The WISE contract has a direct, one-level referral system that rewards both the referrer and referee when a user reserves WISE tokens in the LT. This referral system is an incentive to help increase the amount of ETH sent in, in turn funding a larger and more robust initial liquidity pool on Uniswap."), r.a.createElement("p", null, "When a user makes a ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "token reservation"), ", the front-end interface checks if their browser has a referral cookie stored. If such a cookie is present, the contract makes note of the referrer's ethereum address and associates it with the referee's token reservation. The contract also tags the user's token reservation as having been through a referral, and this reservation is credited as having been 10% more ETH than it actually was. When the user ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "mints their reserved tokens"), " after the end of the LT Epoch, each token reservation that was through a referral will thus mint 10% more WISE than if it hadn't been through a referral."), r.a.createElement("p", null, "Users may change the referral cookie stored in their browser at any time by clicking another referrer's link. If they do, their future token reservations would be associated with the new referrer. All past token reservations for that user remain as is; their previous referrer(s) do not lose credit for their existing referred token reservations.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-3-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "2.2.3.1"), "\xa0\xa0Referrer Bonuses"), r.a.createElement("p", null, "When the LT Epoch ends, referrers that have referred enough ETH into the system, via their referred users token reservations, can then mint an amount of bonus WISE."), r.a.createElement("p", null, "The LT referrer bonus system has two tiers. Bonuses (paid in WISE) are based on how much total ETH their referral link brought in to the LT:"), r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("i", null, "Refer 1 - 49.999999999999999999 ETH"), r.a.createElement("br", null), r.a.createElement("strong", null, "Bonus = 0.05 ETH (paid in WISE)")), r.a.createElement("li", null, r.a.createElement("i", null, "Refer 50 or more ETH"), r.a.createElement("br", null), r.a.createElement("strong", null, "Bonus = 10% of ETH (paid in WISE), and\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "\u201cCM Referrer\u201d"), " status"))), r.a.createElement("p", null, "Examples:"), r.a.createElement("ul", null, r.a.createElement("li", null, "Alice refers a few friends who, in total, send 0.83 ETH into the LT. Alice fails to reach the 1 eth minimum for the first tier, so she earns no bonus WISE."), r.a.createElement("li", null, "Bob refers several friends who, in total, send 3.6 ETH into the LT. Bob qualifies for the first bonus tier, so he earns a flat bonus of 0.05 ETH worth of WISE."), r.a.createElement("li", null, "Eve creates several WISE videos and publishes her referral link on them. Users clicking her referral link send a total of 64 ETH in to the LT. Eve qualifies for the top bonus tier, so she earns 6.4 ETH worth of WISE, as well as permanent\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "\u201cCM Referrer\u201d"), " status.")), r.a.createElement("p", null, r.a.createElement("i", null, "Note: all referral bonuses are paid in WISE. When the LT ends, an effective total LT WISE/ETH exchange rate is calculated by looking at the total amount of ETH sent in by all users, and the total amount of WISE made available for reservation. This ratio is then used to calculate the amount of WISE for each referral bonus."))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-2-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "2.3"), " Circulation Epoch")), r.a.createElement("p", null, "When the final LT Epoch day ends, the Circulation Epoch begins. At this point, no further token reservations can be made."), r.a.createElement("p", null, r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "Reserved WISE"), " and ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "referrer bonus WISE"), " may now be minted by users, at their leisure. Users may begin ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "staking WISE"), ". 90% or more of all ETH sent into the LT and a matching batch of WISE is automatically ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "sent to Uniswap"), ", so users may begin trading WISE and ETH there. All ", r.a.createElement("a", {
                                href: "/docs#sec-2-4"
                            }, "standard ERC-20 functions"), " involving minted tokens are also now available. At the start of the fifteenth day of the Circulation Epoch, there will be a one-time automatic ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "share price"), " increase of 10%."), r.a.createElement("p", null, "Once the LT Epoch has ended, there is a public function in the contract that may be called by anyone to trigger the following one-time sequence of actions to start the Circulation Epoch:"), r.a.createElement("ol", null, r.a.createElement("li", null, "Calculate the total ETH sent into the LT. Set aside 10% or 2,000 ETH, whichever is less, for the ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-2"
                            }, "Wise Foundation reimbursement"), " performed in Step 4 below. The remaining 90% (or more) of this ETH is the ", r.a.createElement("strong", null, "\u201cUniswap Provision Ether\u201d"), "."), r.a.createElement("li", null, "Calculate the total WISE that is available to be minted due to token reservations and referrer bonuses. Calculate the same fraction of this WISE (90% or more) that was used to determine the Uniswap Provision Ether in Step 1 above. Immediately mint this amount of new WISE. This is the ", r.a.createElement("strong", null, "\u201cUniswap Provision WISE\u201d"), "."), r.a.createElement("li", null, "Transfer the \u201cUniswap Provision Ether\u201d and \u201cUniswap Provision WISE\u201d to the WISE/ETH Uniswap exchange pair contract, forming its initial liquidity pool. As part of this transfer, the WISE contract receives back from the Uniswap contract an amount of UNI-V2 liquidity tokens and immediately burns these by transferring them to a known burn address."), r.a.createElement("li", null, "Transfer the 10% (or less) of LT ETH set aside in Step 1 to The Wise Foundations ethereum address."))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "2.3.1"), "\xa0\xa0Uniswap Provision"), r.a.createElement("p", null, "The WISE contract's constructor function, executed when deploying the WISE contract, will make a call to the Uniswap V2 factory contract in order to create the Uniswap WISE/ETH exchange pair contract. This newly created exchange contract's address will be stored internally in the WISE contract."), r.a.createElement("p", null, "This newly created Uniswap WISE/ETH exchange pair contract will simply lie dormant until the Circulation Epoch begins and the Uniswap provision transfer is executed, using the stored address. No minted WISE exists until that point, so no liquidity can be added until then."), r.a.createElement("p", null, "As part of sending the Uniswap provision WISE and ETH to the exchange pair contract, a UniswapV2Router contract is used, which internally wraps the ETH into WETH (wrapped ETH), as is standard in Uniswap V2."), r.a.createElement("p", null, "The UniswapV2Router contract returns an amount of UNI-V2 liquidity tokens to the WISE contract as part of the Uniswap provision transaction. These UNI-V2 liquidity tokens represent ownership of the liquidity pool the WISE contract just sent in, and carry the sole power to withdraw that liquidity. The WISE contract has no code or function allowing such a liquidity withdrawal. However, as a further show of The Wise Foundation's commitment to making WISE a totally trustless system, the WISE contract will automatically and irrevocably destroy these UNI-V2 liquidity tokens upon receipt. This is done by transferring them to a known \u201cburn address\u201d, such as", r.a.createElement("code", null, "0x0"), "."), r.a.createElement("p", null, "Once the Uniswap provision is complete, users are free to use Uniswap's front end to swap WISE into ETH, and vice-versa. They may also choose to deposit their own liquidity pools of WISE/ETH in order to earn fees from traders.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-2"
                            }, "2.3.2"), "\xa0\xa0Wise Foundation Reimbursement"), r.a.createElement("p", null, "Prior to deploying the WISE contract, The Wise Foundation will determine its total expenses incurred in developing and launching WISE. These will include wages paid to developers, fees paid to lawyers, marketing spend, and the cost of the audit."), r.a.createElement("p", null, "This expense total is represented in the contract source code as a hardcoded amount of 2,000 ETH."), r.a.createElement("p", null, "When the LT Epoch closes and the Circulation Epoch begins, the total ETH sent into the LT gets divided into two buckets:"), r.a.createElement("ul", null, r.a.createElement("li", null, "10% of the LT ETH (not to exceed 2,000 ETH)"), r.a.createElement("li", null, "All remaining LT ETH")), r.a.createElement("p", null, "The 10% (or less) bucket of ETH is then transferred to an ethereum address owned by The Wise Foundation. The other bucket (90%+) is sent to Uniswap to create the first liquidity pool for WISE.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "2.3.3"), "\xa0\xa0Minting Tokens"), r.a.createElement("p", null, "Once the LT Epoch has ended and the Circulation Epoch has begun, users may now mint WISE tokens, either due to having\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "reserved WISE in the LT Epoch"), " or having ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "earned referral bonus WISE"), ", or both."), r.a.createElement("p", null, "The minting of WISE is done on-demand by the user, in a single batch, through the front-end interface. The interface will show how many WISE the user can mint, broken down by reservation and/or referral bonus sources. Users may mint their WISE immediately, or wait as long as they like, without penalty."), r.a.createElement("p", null, "Users will likely want to mint their WISE sooner rather than later in order to take advantage of ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "staking"), " them to earn interest, which becomes less profitable the longer one waits.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-4"
                            }, "2.3.4"), "\xa0\xa0Supply Inflation"), r.a.createElement("p", null, "The total circulating supply of WISE inflates at a constant rate of 4% per year. At the end of every day of the Circulation Epoch, the contract calculates how many new WISE will need to be minted for that day in order to achieve that rate of inflation."), r.a.createElement("pre", null, r.a.createElement("code", null, "totalWiseSupply = circulatingWise + stakedWise", r.a.createElement("br", null), "dailyInflationRate = (1.04 ^ (1 / 365) - 1)", r.a.createElement("br", null), "dailyInflationRate =~ 0.0001074597820279", r.a.createElement("br", null), r.a.createElement("br", null), "newWiseToday = totalWiseSupply \xd7 dailyInflationRate")), r.a.createElement("p", null, "These new daily inflation WISE are not immediately minted. Instead, they are earmarked for distribution to two parties: three quarters (3% inflation) to all active ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "stake shares"), " on that day, and one quarter (1% inflation) to all active, qualified\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "CM shares"), " that day. Each active stake is earmarked a fraction of this new WISE in proportion to the stake's shares percentage of the total share pool that day. The same apportionment scheme is used for the WISE earmarked to qualified CM shares."), r.a.createElement("p", null, "An example scenario:"), r.a.createElement("pre", null, r.a.createElement("code", null, "On day X, suppose there are:", r.a.createElement("br", null), "\xa0\xa0100,000,000 total circulating WISE", r.a.createElement("br", null), "\xa0\xa030,000,000 total staked WISE", r.a.createElement("br", null), "\xa0\xa010,000,000 total shares", r.a.createElement("br", null), r.a.createElement("br", null), "The total new WISE that will be generated this day is then:", r.a.createElement("br", null), "\xa0\xa0newWiseDayX = (100,000,000 + 30,000,000) \xd7 0.0001074597820279", r.a.createElement("br", null), "\xa0\xa0newWiseDayX = 13,969.771663627 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "This new WISE is split into two amounts:", r.a.createElement("br", null), "\xa0\xa0three quarters for stake shares (i.e. 3% inflation)", r.a.createElement("br", null), "\xa0\xa0one quarter for CM shares (i.e. 1% inflation)", r.a.createElement("br", null), r.a.createElement("br", null), "Now, suppose user A has an active stake that is 2,000,000 shares.", r.a.createElement("br", null), "On day X, this user's stake then gets some WISE earmarked for it:", r.a.createElement("br", null), r.a.createElement("br", null), "\xa0\xa0userANewWiseDayX = newWiseDayX \xd7 (3/4) \xd7 stakeShares / totalShares", r.a.createElement("br", null), "\xa0\xa0userANewWiseDayX = 13,969.771663627 \xd7 (3/4) \xd7 2,000,000 / 10,000,000", r.a.createElement("br", null), "\xa0\xa0userANewWiseDayX = 2,095.46574954405 WISE", r.a.createElement("br", null)))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-5"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "2.3.5"), "\xa0\xa0Staking"), r.a.createElement("p", null, "The WISE contract allows users to stake their WISE, locking it up for a period of days, in order to earn interest. This is the primary function of the contract during the ", r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "Circulation Epoch"), "."), r.a.createElement("p", null, "Users may open as many stakes as they like. After a stake reaches full maturity, the user may close it at any time to receive their full principal, plus interest, without penalty."), r.a.createElement("p", null, "Unlike some other stakeable tokens, WISE never penalizes a mature stake, no matter how late it is eventually closed. This allows users much more flexibility, especially for taxable income purposes. Also, should a user pass away before being able to close their stakes in a timely fashion, the WISE contract thus remains in compliance with estate laws of various jurisdictions that make it illegal to penalize the assets of a deceased person.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-1"
                            }, "2.3.5.1"), "\xa0\xa0Opening Stakes"), r.a.createElement("p", null, "When a user opens a new stake, they choose an amount of WISE to stake, and a stake length in days. The minimum stake amount is 0.000000000001 WISE (1000000 YODA). The minimum stake length is one day, and the maximum stake length is 15,330 days (just under 42 years)."), r.a.createElement("p", null, "Once a stake is opened, it is in \u201cPending\u201d status. This means that the stake won't technically begin until the following day. A user may close a stake in Pending status, receiving back the stake's principal, without penalty or interest."), r.a.createElement("p", null, "Pending stakes become \u201cActive\u201d status once the next day begins. At this point, closing the stake before it reaches \u201cMature\u201d status will incur a penalty."), r.a.createElement("p", null, "When a stake is opened, the WISE tokens staked are actually burned by the contract and converted into\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "\u201cshares\u201d"), ".  These shares exist for the life of the stake. Once the stake is closed, the shares are destroyed, and WISE is minted back to the user (along with any interest added and penalties deducted.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "2.3.5.2"), "\xa0\xa0Shares and Interest"), r.a.createElement("p", null, "When a stake is opened, its WISE principal is burned and converted into shares. These shares represent the stake size and length as well as, indirectly, how early the stake was opened. The amount of shares a newly opened stake gets is determined by a global \u201cshare price\u201d tracked in the WISE contract, as well as a percentage bonus based on the length of the stake. This share price only increases, hence staking earlier is better than later."), r.a.createElement("p", null, "Stakes earn interest daily through the WISE supply inflation, as well as from other ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "stakes' penalties"), " paid. The ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-4"
                            }, "WISE supply inflates"), " at about 4% per year. Three quarters of that inflation (i.e. 3% APR) is distributed daily to all active stakes, in proportion to their shares as compared to the total share pool. The remaining one quarter (i.e. 1% APR) is distributed daily to the ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "CM referrer shares"), " in the same proportional manner."), r.a.createElement("p", null, "Depending on the length of the stake, a bonus amount of shares will be generated on top of the amount determined by the staked amount of WISE and current share price. This bonus scales linearly from slightly above 0% for a one day stake, to 25% for a 5 year stake, and then to 30% for a 42 year stake. For instance, a stake with a length of 1.5 years will generate", r.a.createElement("code", null, "1.5 * 5% = 7.5%"), " bonus shares."), r.a.createElement("p", null, "The share price starts at some predetermined value denominated in", r.a.createElement("code", null, "WISE per share"), ". Whenever any stake is closed, the contract calculates a ratio of that stake's total return (principal + interest - penalty) to its shares. If this ratio is greater than the current share price, then the share price is immediately set to this new, increased value."), r.a.createElement("p", null, "The share price can only increase over time, albeit fairly slowly. This ensures that earlier stakes get more shares than later stakes of the same amount of WISE. This share price increase mechanism also prevents users from being able to compound their interest with a sequence of smaller stakes in order to try and outperform a single long stake of the same size."), r.a.createElement("p", null, "On the start of the fifteenth day of the ", r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "Circulation Epoch"), ", the share price will be automatically increased by 10% as a one-time event. This creates a very strong incentive for users to open their stakes during the first two weeks of the Circulation Epoch. Waiting until day fifteen to open a stake will mean you get roughly 9% less shares than you would have on the previous day, for the same amount of WISE staked. In turn, that means roughly 9% less interest earned by the stake.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-3"
                            }, "2.3.5.3"), "\xa0\xa0Scraping Stake Interest"), r.a.createElement("p", null, "Users will have the ability to withdraw (scrape) any amount of earned interest from an Active stake (i.e. before the stake fully matures)."), r.a.createElement("p", null, "Users can choose exactly how much interest they wish to scrape, up to the maximum (all accrued, unscraped interest from all previous days). Scraping interest from an Active stake can be done multiple times over the course of the stake."), r.a.createElement("p", null, "Scraping interest is possible starting on day 2 of the active stake. On day 1 (the first active day), the stake has not yet completed a full day of being active, and thus has not yet accrued any interest."), r.a.createElement("p", null, "When a stake is closed, whether Active or Mature, the interest minted back to the user only includes interest that hasn't already been scraped."), r.a.createElement("p", null, "Scraping interest will not affect the stake's principal, but will reduce the number of shares the stake has going forward. This effectively means that the stake will earn slightly less interest on the current and all future days of the stake than it otherwise would have. This share reduction also prevents users from being able to end up with more overall shares if they choose to immediately re-stake their scraped interest."), r.a.createElement("p", null, "Scraping interest may cause a\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "share price"), " increase, just as when\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "closing a stake"), ". Stakes track exactly how much cumulative scraped interest the user has scraped over the course of the stake, for the purpose of these calculations. The process for determining the possible share price increase and the stake shares reduction is as follows:"), r.a.createElement("p", null, "First, calculate a possible new share price based on the stake's pseudo-return (principal plus all scraped interest thus far, including this scrape) divided by the stake's initial shares:"), r.a.createElement("pre", null, r.a.createElement("code", null, "newSharePrice = (stakePrincipal + cumulativeScrapedInterest) / stakeInitialShares")), r.a.createElement("p", null, "Next, if this new share price is greater than the current global share price, update the global share price (which may have just increased due to this scrape):"), r.a.createElement("pre", null, r.a.createElement("code", null, "if (newSharePrice > globalSharePrice) globalSharePrice = newSharePrice")), r.a.createElement("p", null, "Next, calculate an amount of shares to be removed from the stake, based on the interest being scraped now and the global share price:"), r.a.createElement("pre", null, r.a.createElement("code", null, "stakeSharesToRemove = interestBeingScrapedNow / globalSharePrice")), r.a.createElement("p", null, "Finally, reduce the stake's current shares:"), r.a.createElement("pre", null, r.a.createElement("code", null, "stakeCurrentShares = stakeCurrentShares - stakeSharesToRemove"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "2.3.5.4"), "\xa0\xa0Closing Stakes"), r.a.createElement("p", null, "A user may close a stake at any time. Depending on the stake's status (where the stake is in its lifecycle), different things will happen:"), r.a.createElement("ul", null, r.a.createElement("li", null, "Closing a ", r.a.createElement("strong", null, "Pending"), " stake - the stake shares are destroyed. The entire stake principal is minted back to the user, without interest or penalty."), r.a.createElement("li", null, "Closing an ", r.a.createElement("strong", null, "Active"), " (premature) stake - the stake shares are destroyed. The stake principal is penalized (see below) and minted back to the user along with all interest accumulated thus far."), r.a.createElement("li", null, "Closing a ", r.a.createElement("strong", null, "Mature"), " stake - the stake shares are destroyed. The entire stake principal and all interest accumulated is minted back to the user. There are never any penalties for closing a Mature stake, no matter how late.")), r.a.createElement("p", null, "The penalty deducted from the principal (stakedWise) when closing an Active stake is as follows:"), r.a.createElement("pre", null, r.a.createElement("code", null, "If the stake is one day long:", r.a.createElement("br", null), "\xa0\xa0penaltyAmount = stakedWise \xd7 0.1", r.a.createElement("br", null), r.a.createElement("br", null), "If the stake is two or more days long:", r.a.createElement("br", null), "\xa0\xa0penaltyAmount = stakedWise \xd7 (.1 + .8 \xd7 ((daysLeft - 1) / (stakedDays - 1)))")), r.a.createElement("p", null, "Thus, if you close an Active stake that was 100 days long on its final day before maturity, you get a 10% penalty applied to the principal. If you close the same stake on the first day of it being Active, you get a 90% penalty. The penalty scales linearly between those two extremes."), r.a.createElement("p", null, "Any such WISE penalized from a stake's return is earmarked for distribution to all active stake shares that day. These penalty distributions are only realized by those stakes' shares when each of those stakes end.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-5"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "2.3.5.5"), "\xa0\xa0Stake Referrals"), r.a.createElement("p", null, "Just as the WISE contract includes a referral program to incentivize users to help bring more ETH into the ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "Liquidity Transformer"), ", it also provides a referral program for staking."), r.a.createElement("p", null, "When a user opens a new stake, the front-end interface checks whether the browser has a referral cookie, just as it does when making a ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "token reservation"), " in the LT Epoch. If such a cookie is present, AND the new stake is at least 365 days long, the contract tags this new stake with the referrer's address."), r.a.createElement("p", null, "A referred stake generates 10% extra shares for the staker (beyond what it would have if not referred) as well an equal (but without the 10% bonus) amount of \u201ccritical mass shares\u201d (a.k.a. \u201cCM shares\u201d) for the referrer. The system-wide pool of CM shares gets earmarked one quarter of the daily inflation WISE, but only for referrers that have qualified as CM referrers."), r.a.createElement("p", null, "To qualify as a CM referrer, a user must have reached a total of $10,000 worth of referred stakes of 365+ days in length. If a user meets this condition, they are immediately and forever tagged as a CM referrer, and cannot ever lose that distinction, regardless of if their referees close all their stakes."), r.a.createElement("p", null, "Another way to qualify as a CM referrer is to have referred 50 ETH of token reservations in the ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "referral system of the LT Epoch"), ". Users reaching that level are automatically pre-qualified as CM referrers forever."), r.a.createElement("p", null, "Calculating a new stake's USD value is only done once, when the stake is opened. The WISE/USD exchange rate used for this calculation will be determined by querying the Uniswap WISE/ETH and ETH/DAI exchange pair contracts' price oracle interfaces.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-6"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-6"
                            }, "2.3.6"), "\xa0\xa0Liquidity Provider Staking"), r.a.createElement("p", null, "WISE has an additional way of staking that rewards liquidity providers for the WISE/ETH pair if certain conditions are met. If the liquidity percentage of WISE on Uniswap falls below 20%, then you may stake your LP tokens with the WISE contract and start earning interest (on top of the trading fees you already get)."), r.a.createElement("p", null, "This new money comes from the 3% inflation for stakers such that, the 3% for stakers slowly decreases and the 0% for LPs slowly increases. Once this triggers, it will become valuable for a certain amount of people to LP stake since there is now a new pot of money available for LPs to earn daily interest."), r.a.createElement("p", null, "An additional perk for LP staking is that you may end your stake at any time and collect your LP tokens. When the Uniswap liquidity goes back above 30%, the rewards slowly start diminishing. The staking inflation will creep back up towards 3% and the LP inflation will creep back towards 0% until triggered again."), r.a.createElement("p", null, "This is a safeguard in the system that will most likely not be triggered for years if at all. Users can still choose to add to liquidity themselves at any time in order to earn about 6% ROI from fees, but the additional incentive of shares interest doesn't trigger until needed.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-2-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-4"
                            }, "2.4"), "\xa0\xa0ERC-20 Functionality"), r.a.createElement("p", null, "The WISE contract conforms fully with the ERC-20 token standard, as proposed in ", r.a.createElement("a", {
                                href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"
                            }, "EIP-20"), ". This is essentially a set of functions that a token contract must implement in order to be an ERC-20 token."), r.a.createElement("p", null, "This ERC-20 standard compliance means that applications, websites, exchanges, and smart contracts can very easily integrate with or be built on top of the WISE contract.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("br", null), r.a.createElement("h2", {
                                id: "sec-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-3"
                            }, "3"), "\xa0\xa0WISE Ecosystem"), r.a.createElement("p", {
                                className: "text-left"
                            }, "This section contains additional information about the WISE website and ecosystem.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-3-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-3-1"
                            }, "3.1"), "\xa0\xa0Referral Links"), r.a.createElement("p", {
                                className: "aside"
                            }, "ATTENTION: the WISE referral link and cookie system is\xa0", r.a.createElement("strong", null, "ALREADY LIVE!"), " You can start spreading your ref link today and building a base of referred users well before contract launch. So, do yourself a favor and start spreading your ref link everywhere!"), r.a.createElement("p", null, "Format:", r.a.createElement("code", {
                                className: "select-all"
                            }, "https://wisetoken.net/?w=YOURETHADDRESS")), r.a.createElement("p", null, "Example: ", r.a.createElement("a", {
                                href: "https://wisetoken.net/?w=0x91143a01a6111ac86efBcc92Fc4f86c01c10AE9F"
                            }, "Get 10% Bonus WISE!")), r.a.createElement("p", null, "Anyone may use a referral link to direct users to the WISE website, this Teal Paper, the forthcoming official contract web interface, or any other page on the ", r.a.createElement("a", {
                                href: "https://wisetoken.net/"
                            }, "wisetoken.net"), "\xa0 domain or its subdomains, in order to potentially earn various referral bonus WISE from those users contract interactions."), r.a.createElement("p", null, "When a user clicks such a ref link, the wisetoken.net website stores a cookie on their browser, containing the referrer's eth address from the ref link. If that user later sends ETH to the LT or starts a stake at least one year in duration, the cookie will cause the contract to mark that LT reservation or stake as having been referred by that referrer."), r.a.createElement("p", null, 'If a user already has a referral cookie in their browser and clicks a different ref link, the cookie will be overwritten with the second ref link\'s ethereum address. Referrals are thus "last click wins".'), r.a.createElement("p", null, "Referral links containing invalid ethereum addresses will not work; the website will not create (or overwrite) the cookie.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-4"
                            }, "4"), "\xa0\xa0Conclusion"), r.a.createElement("p", null, "The Wise Foundation sincerely hopes that our efforts to provide the general public with a trustless, decentralized, interest-bearing instrument will bear fruit, and that WISE will be a great success. But, we can't achieve these goals without the help of the community around us."), r.a.createElement("p", null, "The WISE project was started not with the intention to profit, but from the desire to create something incredibly useful for the world. We hope this document has made our vision and intentions clear."), r.a.createElement("p", null, "We welcome any questions, comments, or criticism you may have. We also have some need for various types of contributors to the project."), r.a.createElement("p", null, "Please join us in the ", r.a.createElement("a", {
                                href: "https://t.me/WiseToken"
                            }, "official WISE Telegram group at t.me/WiseToken"), " and the ", r.a.createElement("a", {
                                href: "https://discord.gg/keJUb4W"
                            }, "official WISE Discord server"), " to discuss the WISE project with the founders, developers, supporters, critics, and the rest of the community.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-5"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-5"
                            }, "5"), "\xa0\xa0Acknowledgements"), r.a.createElement("p", null, "The Wise Foundation would like to sincerely thank the following people and groups that have been and continue to be instrumental in making WISE a reality and a success:"), r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://twitter.com/haydenzadams"
                            }, "Hayden Adams"), " and the ", r.a.createElement("a", {
                                href: "https://uniswap.org/"
                            }, "Uniswap developers")), " \u2014 for your development of such an impeccable and groundbreaking decentralized exchange protocol, and for your valued advice on how best to integrate WISE directly with it."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://twitter.com/VitalikButerin"
                            }, "Vitalik Buterin"), ",\xa0", r.a.createElement("a", {
                                href: "https://gavwood.com/"
                            }, "Dr. Gavin Wood"), ",\xa0", r.a.createElement("a", {
                                href: "https://github.com/ethereum"
                            }, "et al.")), " \u2014 for your conception, guidance, and development of the Ethereum platform."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://ethereum.org/"
                            }, "The Ethereum Foundation")), " \u2014 for your continued generous financial support of the many incipient projects in the Ethereum ecosystem."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "http://provable.xyz/"
                            }, "Provable Things Ltd.")), " \u2014 for your fully featured and provably secure blockchain oracle contract and Ledger-based random datasource."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://openzeppelin.com/"
                            }, "OpenZeppelin")), " \u2014 for your development of essential Solidity smart contract interfaces and building blocks."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://www.trufflesuite.com/"
                            }, "Truffle Blockchain Group")), " \u2014 for your development and support of the Truffle Suite, which has helped speed and simplify development of WISE and many other smart contracts, interfaces, and testing thereof."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://t.me/WiseToken"
                            }, "The WISE Telegram crowd")), " \u2014 for your steady stream of valuable ideas, constructive criticism, honest feedback, witty banter, and comic relief throughout the design and development process."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://www.coinfabrik.com/"
                            }, "CoinFabrik")), " \u2014 for your help in auditing the WISE contract Solidity source code."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://99designs.com/profiles/OpayaCreative"
                            }, "Opaya Creative")), " \u2014 for your sharp design of the WISE logo, related images, and branding guide."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://www.upwork.com/"
                            }, "Upwork")), " \u2014 for making the search for talented developers less of a search."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://coderpad.io/"
                            }, "CoderPad")), " \u2014 for allowing developer screenings and interviews to run smoothly and produce detailed technical insights not available through a phone call."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://99designs.com/"
                            }, "99designs")), " \u2014 for hosting a slick platform full of talented and eager designers."), r.a.createElement("li", null, "Teal Paper style adopted from the\xa0", r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://makerdao.com/purple/"
                            }, "DAI Stablecoin Purple Paper")), "."))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-6"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-6"
                            }, "6"), "\xa0\xa0Availability"), r.a.createElement("p", null, "The web version of this paper is hosted at ", r.a.createElement("a", {
                                href: "/teal"
                            }, "https://wisetoken.net/teal/"), ". Its source code is maintained at ", r.a.createElement("a", {
                                href: "https://github.com/wise-foundation/wise-website/tree/master/html/teal"
                            }, "https://github.com/wise-foundation/wise-website/tree/master/html/teal"), ".")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-7"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7"
                            }, "7"), "\xa0\xa0Appendices")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-7-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7-1"
                            }, "Appendix A"), "\xa0\xa0Terminology"), r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("strong", null, "WISE"), " \u2014 the token and contract described herein."), r.a.createElement("li", null, r.a.createElement("strong", null, "YODA"), " \u2014 the base unit of the WISE token, analogous to wei for ETH, or satoshi for BTC. One WISE equals one quintillion YODA (1,000,000,000,000,000,000)."), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "Stake"), " \u2014 a time locked deposit of WISE which earns interest over time."), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "Liquidity Transformer Epoch"), " \u2014 the first fifty days of the contract's existence, during which users may deposit ETH to reserve part of the initial supply of WISE."), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "Circulation Epoch"), " \u2014 the epoch immediately following the end of the LT Epoch, during which users may mint their tokens reserved in the LT Epoch, transfer tokens, stake tokens, etc."), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "Uniswap"), " \u2014 a decentralized, non-custodial ERC-20 token and ETH exchange on the Ethereum blockchain. The WISE contract is integrated directly with Uniswap. General info on Uniswap is ", r.a.createElement("a", {
                                href: "https://uniswap.org/"
                            }, "here"), ", Uniswap exchange stats are are ", r.a.createElement("a", {
                                href: "https://uniswap.info/"
                            }, "here"), ", and the main exchange is ", r.a.createElement("a", {
                                href: "https://app.uniswap.org/"
                            }, "here"), "."), r.a.createElement("li", null, r.a.createElement("strong", null, "ERC-20"), " \u2014 a standard interface for Ethereum smart contract tokens. ERC stands for \u201cEthereum Request for Comment\u201d. The original EIP (Ethereum Improvement Proposal) describing ERC-20 tokens can be found ", r.a.createElement("a", {
                                href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"
                            }, "here"), "."))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-7-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7-2"
                            }, "Appendix B"), "\xa0\xa0Coding Standards"), r.a.createElement("ul", null, r.a.createElement("li", null, "The WISE contract is written entirely in Solidity and compiled with solc 0.7.2."), r.a.createElement("li", null, "The code should adhere to the formats prescribed by the ", r.a.createElement("a", {
                                href: "https://solidity.readthedocs.io/en/v0.7.2/style-guide.html"
                            }, "style guide"), " section of in the official ", r.a.createElement("a", {
                                href: "https://solidity.readthedocs.io/en/v0.7.2/"
                            }, "Solidity 0.7.2 documentation"), "."), r.a.createElement("li", null, "All public interfaces (at a minimum) should be annotated using the ", r.a.createElement("a", {
                                href: "https://solidity.readthedocs.io/en/v0.7.2/natspec-format.html"
                            }, "NatSpec format"), "."), r.a.createElement("li", null, "Unit tests should provide 100% coverage of the source code. All conceivable edge and corner cases should be covered."), r.a.createElement("li", null, "Function and variable names should convey their purpose and usage as clearly and tersely as possible, in plain English. Avoid using digits, unnecessary abbreviations, acronyms, shorthand, or slang."), r.a.createElement("li", null, "Functions should be as short as is practical. They should do what their name implies, and not much else. A good rule of thumb is that a function should try to be viewable in its entirety on a typical monitor, at a typical font size, if at all possible."), r.a.createElement("li", null, "Comments should be employed wisely. Dont comment to explain what code does. Good function and variable names will accomplish that. Rather, use comments to explain why something is coded a certain way, Use comments to explain any non-obvious technical points or decisions involved in a piece of code."), r.a.createElement("li", null, r.a.createElement("code", null, "require()"), ' function calls should return a short but descriptive error message, always prefixed with "WISE: ".'), r.a.createElement("li", null, "Avoid duplicated code (don't repeat yourself)."), r.a.createElement("li", null, "Wherever possible and practical, write with gas efficiency as a priority. Some parts of the code may sacrifice minuscule gas efficiencies for various important reasons. When deemed to be of greater value, code legibility, clean architecture, and a straightforward and fully featured end-user experience should take priority over such tiny gas savings."))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-7-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7-3"
                            }, "Appendix C"), "\xa0\xa0Source Code Audit"), r.a.createElement("p", null, "The Wise Foundation has obtained a paid, professional audit of the WISE contract Solidity source code from ", r.a.createElement("a", {
                                href: "https://www.coinfabrik.com/"
                            }, "CoinFabrik"), ", a reputable auditing firm. The full audit report is included below."), r.a.createElement("p", null, "TL;DR - The auditors' conclusion was, \u201c", r.a.createElement("i", null, "We found that although the project shows a certain complexity, the code [is] well written and security has been taken into account. The documentation provided was also very helpful and relates correctly to what is implemented in the contracts. No security issues were found and the only non-security issue was quickly fixed by the team."), "\u201d"), r.a.createElement("embed", {
                                src: "/Wise_Audit_Report.pdf",
                                width: "100%",
                                height: "800px"
                            })), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                className: "centered",
                                id: "sec-8"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-8"
                            }, "References")), r.a.createElement("p", {
                                className: "bib"
                            }, "Adams, H. (2020, February). ", r.a.createElement("cite", null, "Uniswap whitepaper."), " ", r.a.createElement("a", {
                                href: "https://hackmd.io/@Uniswap/HJ9jLsfTz"
                            }, "https://hackmd.io/@Uniswap/HJ9jLsfTz")), r.a.createElement("p", {
                                className: "bib"
                            }, "Adams, H., Zinsmeister, N., Robinson, D. (2020, March). ", r.a.createElement("cite", null, "Uniswap v2 core."), " ", r.a.createElement("a", {
                                href: "https://uniswap.org/whitepaper.pdf"
                            }, "https://uniswap.org/whitepaper.pdf")), r.a.createElement("p", {
                                className: "bib"
                            }, "Knightly Crypto. (2020, March). ", r.a.createElement("cite", null, "Wise token: Trustless and easy interest-bearing crypto."), " ", r.a.createElement("a", {
                                href: "https://wisetoken.net/wise-token-white-paper.pdf"
                            }, "https://wisetoken.net/wise-token-white-paper.pdf")), r.a.createElement("p", {
                                className: "bib"
                            }, "Mushegian, N., Brockman, D., Brockman, M. (2018, February 6). ", r.a.createElement("cite", null, "Reference implementation of the decentralized DAI stablecoin issuance system."), " ", r.a.createElement("a", {
                                href: "https://makerdao.com/purple/"
                            }, "https://makerdao.com/purple/")), r.a.createElement("p", {
                                className: "bib"
                            }, "Oraclize. (n.d.). ", r.a.createElement("cite", null, "A scalable architecture for on-demand, untrusted delivery of entropy."), " Retrieved March 22, 2020, from ", r.a.createElement("a", {
                                href: "https://provable.xyz/papers/random_datasource-rev1.pdf"
                            }, "https://provable.xyz/papers/random_datasource-rev1.pdf"), "."), r.a.createElement("p", {
                                className: "bib"
                            }, "Provable Things. (n.d.). ", r.a.createElement("cite", null, "Security deep dive."), " Provable docs. Retrieved March 22, 2020, from ", r.a.createElement("a", {
                                href: "https://docs.provable.xyz//docs#security-deep-dive"
                            }, "https://docs.provable.xyz//docs#security-deep-dive")), r.a.createElement("p", {
                                className: "bib"
                            }, "Vogelsteller, F., & Buterin, V. (2015, November). ", r.a.createElement("cite", null, "EIP-20: ERC-20 token standard."), " ", r.a.createElement("a", {
                                href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"
                            }, "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md")), r.a.createElement("p", {
                                className: "bib"
                            }, "Wood, G. (2019, October 20). ", r.a.createElement("cite", null, "Ethereum: A secure decentralized generalised transaction ledger: Byzantium version 7e819ec."), " ", r.a.createElement("a", {
                                href: "https://ethereum.github.io/yellowpaper/paper.pdf"
                            }, "https://ethereum.github.io/yellowpaper/paper.pdf")), r.a.createElement("p", {
                                className: "bib"
                            }, "Zhang, Y., Chen, X., & Park, D. (2018, October). ", r.a.createElement("cite", null, "Formal specification of constant product (x \xd7 y = k) market maker model and implementation."), " ", r.a.createElement("a", {
                                href: "https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf"
                            }, "https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf")))))))
                        }
                    }]), a
                }(n.Component),
                g = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(E.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.scrollToHashId()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.scrollToHashId()
                        }
                    }, {
                        key: "scrollToHashId",
                        value: function() {
                            var e = this.removeHash,
                                t = window.location.hash.substring(1);
                            t && t.length && setTimeout(window.requestAnimationFrame((function() {
                                document.getElementById(t).scrollIntoView(), e()
                            })), 0)
                        }
                    }, {
                        key: "removeHash",
                        value: function() {
                            var e = window.location,
                                t = window.history;
                            if (t && "pushState" in t) t.replaceState("", document.title, e.pathname + e.search);
                            else {
                                var a = document.body.scrollTop,
                                    l = document.body.scrollLeft;
                                e.hash = "", document.body.scrollTop = a, document.body.scrollLeft = l
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement(b.a, null, r.a.createElement("div", {
                                className: "docs-overflow-visible"
                            }, r.a.createElement("div", {
                                className: "card-header rounded-0 bg-white px-0 px-lg-3 py-1 border-bottom"
                            }, r.a.createElement(p.a, {
                                className: "d-block text-center py-2 text-sm-left align-items-center justify-content-between docs"
                            }, r.a.createElement("section", {
                                className: "text-center"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-center"
                            }, r.a.createElement("h1", null, "WISE\uff08\u667a\u6167\u5e01\uff09\u6587\u6863"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1"
                            }, "1"), "\xa0\xa0\u4ecb\u7ecd")), r.a.createElement("p", null, r.a.createElement("strong", null, "WISE Token"), ", \u5728\u6b64\u6587\u6863\u5c06\u79f0\u4e3a ", r.a.createElement("strong", null, "\u667a\u6167\u5e01"), ",\u7b26\u5408ERC-20\u7684\u667a\u80fd\u5408\u7ea6\uff0c\u65e8\u5728\u90e8\u7f72\u5728\u4ee5\u592a\u574a\u533a\u5757\u94fe\u4e0a\u3002WISE\u662f\u53bb\u4e2d\u5fc3\u5316\u7684,\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "\u516c\u5e73"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "\u81ea\u52a8\u5316\u7684\u6d41\u52a8\u6027"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "\u53ef\u4fe1\u4efb\u5730\u4ea4\u6613"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "\u8ba1\u606f"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-1-1"
                            }, "\u503a\u5238"), " \u5e01."), r.a.createElement("p", null, "\u672c\u6587\u6863\u662fWISE\u5408\u540c\u53ca\u5176\u529f\u80fd\u7684\u4e00\u822c\u6280\u672f\u89c4\u8303"), r.a.createElement("p", null, "\u4e3b\u7f51\u8ba1\u5212\u542f\u52a8WISE\u5408\u540cr ", r.a.createElement("span", {
                                className: "nowrap"
                            }, "2020\u5e7410\u6708"), ".")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-1-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1-1"
                            }, "1.1"), "\xa0\xa0WISE\uff08\u667a\u6167\u5e01\uff09\u7684\u7528\u5904")), r.a.createElement("p", null, "WISE\uff08\u667a\u6167\u5e01\uff09\u7684\u6838\u5fc3\u76ee\u7684 \u2014 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "\u8d28\u62bc"), " \u2014 \u7c7b\u4f3c\u4e8e\u503a\u5238\u548cCD\uff08\u5b58\u6b3e\u8bc1\u660e\uff09\uff1a\u5956\u52b1\u6301\u6709\u4eba\u6240\u8d5a\u53d6\u7684\u5229\u606f\uff0c\u4ee5\u6362\u53d6\u4ed6\u4eec\u9501\u5b9a\u4e00\u6bb5\u65f6\u95f4\u7684\u8d44\u91d1\u3002 WISE\u878d\u5408\u4e86\u8fd9\u4e24\u79cd\u4f20\u7edf\u5de5\u5177\u7684\u67d0\u4e9b\u529f\u80fd\uff0c\u4f46\u5728\u529f\u80fd\u4e0a\u505a\u4e86\u5f88\u5927\u7684\u6539\u8fdb\u3002"), r.a.createElement("p", null, r.a.createElement("strong", null, "CDs"), " \u5f80\u5f80\u5177\u6709\u8f83\u4f4e\u7684\u98ce\u9669\uff0c\u8f83\u4f4e\u7684\u56de\u62a5\uff0c\u5e76\u4e14\u53ea\u5728\u5230\u671f\u65e5\u652f\u4ed8\u5229\u606f\u3002"), r.a.createElement("p", null, r.a.createElement("strong", null, "\u503a\u5238"), " \u5f80\u5f80\u4f1a\u6709\u66f4\u9ad8\u7684\u98ce\u9669\uff0c\u66f4\u9ad8\u7684\u56de\u62a5\uff0c\u5e76\u4e14\u4f1a\u6309\u65e2\u5b9a\u65f6\u95f4\u8868\u5b9a\u671f\u4ed8\u6b3e\uff08\u901a\u5e38\u6bcf\u516d\u4e2a\u6708\u4ed8\u6b3e\u4e00\u6b21\uff09"), r.a.createElement("p", null, r.a.createElement("strong", null, "WISE"), " \u4e0e\u503a\u5238\u6700\u76f8\u4f3c\uff0c\u56e0\u4e3a\u5b83\u8d5a\u53d6\u4e86\u76f8\u5bf9\u8f83\u9ad8\u7684\u5229\u606f\uff0c\u4f46\u5141\u8bb8\u7528\u6237\u968f\u65f6\u63d0\u53d6"), r.a.createElement("strong", null, "WISE\u5728\u6240\u6709\u65b9\u9762\u90fd\u4f18\u4e8e\u503a\u5238\u548cCD:"), r.a.createElement("p", null, "WISE\u4f7f\u653e\u6837\u4eba\u5b8c\u5168\u7075\u6d3b\u5730\u9009\u62e9\u786e\u5207\u7684\u65f6\u95f4\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-3"
                            }, "\u63d0\u53d6\u5229\u606f"), " \u5728\u6869\u7684\u751f\u547d\u4e2d\u3002\u60a8\u53ef\u4ee5\u6bcf\u5929\uff0c\u4e0d\u5b9a\u671f\u5730\u63d0\u53d6\u5229\u606f\uff0c\u7b49\u5230\u5230\u671f\u6216\u4efb\u4f55\u60a8\u559c\u6b22\u7684\u5229\u606f\uff01"), r.a.createElement("p", null, "WISE\u80a1\u4efd\u6bd4\u503a\u5238\u548cCD\u5177\u6709\u66f4\u9ad8\u7684\u56de\u62a5\uff0c\u66f4\u4f4e\u7684\u98ce\u9669\uff08\u7531\u4e8e\u5206\u6563\u548c\u4e0d\u53d7\u4fe1\u4efb\uff09\u4ee5\u53ca\u66f4\u9ad8\u7684\u7075\u6d3b\u6027\u3002\u4e0d\u518d\u6709\u4fe1\u4efb\u7684\u94f6\u884c\u548c\u653f\u5e9c\u4fdd\u6301\u507f\u4ed8\u80fd\u529b\u800c\u4e0d\u6539\u53d8\u5176\u89c4\u5219\u3002\u65e0\u9700\u518d\u62c5\u5fc3\u503a\u5238\u53d1\u884c\u4eba\u53ef\u80fd\u4f1a\u62d6\u6b20\u60a8\u7684\u6b3e\u9879\u3002"), r.a.createElement("p", null, "WISE\u662f\u7eaf\u51c0\u7684\uff0c\u4e0d\u53d8\u7684\u4ee3\u7801.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-1-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1-2"
                            }, "1.2"), "\xa0\xa0Wise\u57fa\u91d1\u4f1a")), r.a.createElement("p", null, "Wise\u57fa\u91d1\u4f1a\uff08Wise Foundation\uff09\u662f2020\u5e742\u6708\u6210\u7acb\u7684\u975e\u6cd5\u4eba\u975e\u8425\u5229\u7ec4\u7ec7\u3002WISE\u5408\u540c\u548c\u5404\u79cd ", r.a.createElement("a", {
                                href: "/docs#sec-3"
                            }, "\u76f8\u5173\u8f6f\u4ef6\u548c\u7f51\u7ad9"), " \u7531Wise\u57fa\u91d1\u4f1a\u5b8c\u5168\u8d44\u52a9\u548c\u5f00\u53d1."), r.a.createElement("p", null, "Wise\u57fa\u91d1\u4f1a\u81f4\u529b\u4e8e\u63d0\u4f9b\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3\u5408\u540c\u7684\u6750\u6599\u3002\u8fd9\u662f\u5728\u5408\u540c\u6e90\u4ee3\u7801\u53ca\u5176\u529f\u80fd\u4e0a\u5efa\u7acb\u9ad8\u5ea6\u4fe1\u4efb\u7684\u91cd\u8981\u4e00\u6b65\uff0c\u56e0\u4e3a\u5e76\u975e\u6bcf\u4e2a\u4eba\u90fd\u6709\u80fd\u529b\u6216\u610f\u613f\u6765\u6d88\u5316\u8be5\u4ee3\u7801\u3002"), r.a.createElement("p", null, "WISE\u5408\u540c\u6e90\u4ee3\u7801\u5c06\u5728\u4ee5\u4e0b\u4f4d\u7f6e\u516c\u5f00", r.a.createElement("a", {
                                href: "https://github.com/wise-foundation"
                            }, "\u6211\u4eec\u7684"), ". ", r.a.createElement("a", {
                                href: "/docs#sec-7-3"
                            }, "WISE\u5408\u540c\u6e90\u4ee3\u7801\u7684\u4ed8\u8d39\u4e13\u4e1a\u5ba1\u6838\u5df2\u5b8c\u6210\uff0c\u5e76\u5305\u542b\u5728\u672c\u6587\u6863\u4e2d"), "."), r.a.createElement("p", null, "\u5982\u679c\u60a8\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u6216\u60f3\u4e0e\u521b\u59cb\u4eba\uff0c\u5f00\u53d1\u4eba\u5458\u548c\u5176\u4ed6\u793e\u533a\u8ba8\u8bba\u8be5\u9879\u76ee\uff0c\u8bf7\u52a0\u5165\u5b98\u65b9WISE\u7535\u62a5\u7fa4\uff0c\u7f51\u5740\u4e3a\uff1a ", r.a.createElement("a", {
                                href: "https://t.me/WiseToken"
                            }, "t.me/WiseToken"), ". \u6211\u4eec\u6b22\u8fce\u6211\u4eec\u8fd9\u4e2a\u8c26\u865a\u793e\u533a\u7684\u6240\u6709\u6709\u5174\u8da3\u7684\uff0c\u53d7\u4eba\u5c0a\u656c\u7684\u805a\u4f1a\u3002\u6709\u5173WISE\u7684\u5404\u79cd\u65b0\u95fb\u7a3f\uff0c\u8bf7\u52a0\u5165WiseTokenNews\u7535\u62a5\u9891\u9053\uff0c\u7f51\u5740\u4e3a\uff1a ", r.a.createElement("a", {
                                href: "https://t.me/WiseTokenNews"
                            }, "t.me/WiseTokenNews"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-1-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-1-3"
                            }, "1.3"), "\xa0\xa0\u52a8\u673a\u548c\u539f\u5219")), r.a.createElement("p", null, "\u5c06\u60a8\u7684\u94b1\u6258\u4ed8\u7ed9\u5176\u4ed6\u4eba\u770b\u7ba1\u5177\u6709\u5185\u5728\u7684\u98ce\u9669\u3002\u4f20\u7edf\u91d1\u878d\u5de5\u5177\u4e2d\u7684\u660e\u663e\u7f3a\u9677\u662f\u5f00\u53d1WISE\u7684\u4e3b\u8981\u52a8\u673a\u3002 WISE\u5408\u540c\u65e8\u5728\u786e\u4fdd\u5373\u4f7f\u5728\u8fdb\u884c\u5404\u79cd\u7ecf\u6d4e\u6d3b\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u4e5f\u59cb\u7ec8\u53ef\u4ee5\u5b8c\u5168\u4fdd\u7ba1\u548c\u63a7\u5236\u5176WISE\u4ee4\u724c"), r.a.createElement("p", null, "The ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "WISE\u7684\u521d\u59cb\u94f8\u9020"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3"
                            }, "\u9080\u8bf7\u8fd4\u4f63"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-1"
                            }, "\u5f00\u542f"), " \u548c ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "\u5173\u95ed\u8d28\u62bc"), ",\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "\u83b7\u5f97\u5229\u606f"), ", \u751a\u81f3\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "\u4e3aETH\u6216\u5176\u4ed6\u4ee3\u5e01\u51fa\u552eWISE"), "\xa0 \u53ef\u4ee5\u7aef\u5bf9\u7aef\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\uff0c\u800c\u65e0\u9700\u4f7f\u7528\u7528\u6237\u7684WISE\u4ee4\u724c\u5728\u53e6\u4e00\u4e2a\u4eba\u6216\u7cfb\u7edf\u7684\u63a7\u5236\u4e0b\u3002\u5c06\u6b64\u4e0e\u60a8\u4e0d\u80fd\u4fe1\u4efb\u7684\u94f6\u884c\u4e16\u754c\u4ee5\u53ca\uff08\u6839\u672c\uff09\u6ca1\u6709\u6700\u5927\u5229\u76ca\u7684\u4f20\u7edf\u7406\u8d22\u516c\u53f8\u8fdb\u884c\u6bd4\u8f83\u3002"), r.a.createElement("p", null, "\u62e5\u6709\u52a0\u5bc6\u8d27\u5e01\u7684\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u65b9\u9762\u662f\u6709\u4e00\u4e2a\u5730\u65b9\uff0c\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u5b89\u5168\uff0c\u8f7b\u677e\uff0c\u5feb\u901f\u5730\u8fdb\u884c\u4ea4\u6613\u3002\u6211\u4eec\u8ba4\u4e3aUniswap\u662f\u4ee5\u592a\u574a\u4e0a\u5e7f\u53d7\u6b22\u8fce\u4e14\u5907\u53d7\u63a8\u5d07\u7684\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\uff08DEX\uff09 \u667a\u80fd\u5408\u7ea6\u3002\u4e94\u5341\u5929\u4e4b\u540e ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "\u6d41\u52a8\u6027\u53d8\u538b\u5668\u65f6\u4ee3"), ", WISE\u5408\u540c\u5c06\u81ea\u52a8\uff0c\u4e0d\u53ef\u4fe1\u8d56\u4e14\u4e0d\u53ef\u64a4\u9500 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "\u5728Uniswap\u4e0a\u5f15\u5bfc\u81ea\u5df1\u7684\u521d\u59cb\u6d41\u52a8\u8d44\u91d1\u6c60"), ". \u7528\u6237\u5728LT\u7eaa\u5143\u671f\u95f4\u53d1\u9001\u7ed9\u5408\u540c\u7684\u6240\u6709ETH\u4e2d\u7684\u81f3\u5c1190\uff05\u5c06\u4f9d\u6b21\u7531WISE\u5408\u540c\u81ea\u52a8\u8f6c\u79fb\u5230Uniswap\uff0c\u4ee5\u53ca\u7b49\u4ef7\u7684\u94f8\u9020WISE\u3002"), r.a.createElement("p", null, "\u4f5c\u4e3a\u5bf9\u6b64\u6d41\u52a8\u6027\u6c60\u5b58\u6b3e\u7684\u4ea4\u6362\u5e76\u540c\u65f6\u8fdb\u884c\uff0cUniswap\u5c06\u9002\u5f53\u6570\u91cf\u7684UNI\u6d41\u52a8\u6027\u4ee3\u5e01\u8f6c\u8ba9\u7ed9WISE\u5408\u540c\uff0c\u8be5\u4ee4 \u724c\u5177\u6709\u552f\u4e00\u7684\u6743\u529b\uff0c\u4ee5\u540e\u53ef\u4ee5\u64a4\u56de\u8be5\u6d41\u52a8\u6027\u6c60\u3002 WISE\u5408\u540c\u901a\u8fc7\u5c06\u8fd9\u4e9bUNI\u4ee4\u724c\u8f6c\u79fb\u5230\u5df2\u77e5\u7684\u523b\u5f55\u5730\u5740\uff0c\u5c06\u81ea \u52a8\uff0c\u7acb\u5373\u4e14\u53ef\u8bc1\u660e\u5730\u9500\u6bc1\u8fd9\u4e9b\u4ee4\u724c\u3002\u5728\u8fd9\u6837\u505a\u65f6\uff0cWISE\u5408\u540c\u786e\u4fdd\u4efb\u4f55\u4e2a\u4eba\uff0c\u4e00\u65b9\uff0c\u5408\u540c\u6216\u5b9e\u4f53\u5728\u6574\u4e2a\u6c38\u6052\u7684 \u65f6\u95f4\u5185\u90fd\u4e0d\u80fd\u4eceUniswap\u64a4\u56de\u8be5\u521d\u59cbETH / WISE\u6d41\u52a8\u8d44\u91d1\u6c60\u3002"), r.a.createElement("p", null, "WISE\u5408\u7ea6\u8fd8\u5141\u8bb8\u7528\u6237\u8d5a\u53d6\u88ab\u79f0\u4e3aWISE\u4ee4\u724c\u5b9a\u671f\u5b58\u6b3e\u7684\u5229\u606f ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "\u8d28\u62bc"), ",\u4e0e\u503a\u5238\u6700\u76f8\u4f3c\uff0c\u4f46\u66f4\u7075\u6d3b\u3002\u80a1\u4efd\u53ef\u4ee5\u50cf\u503a\u5238\u4e00\u6837\u8d5a\u53d6\u5229\u606f\uff0c\u4f46\u5176\u9644\u52a0\u529f\u80fd\u662f\u53ef\u4ee5\u5728\u80a1\u4efd\u5b58\u7eed\u671f\u5185\u968f\u65f6\u63d0\u53d6\u5229\u606f\u3002\u503a\u5238\u4e0d\u5141\u8bb8\u7684\u4e1c\u897f\u3002 WISE\u4e2d\u8fd9\u4e9b\u7c7b\u4f3c\u503a\u5238\u7684\u8ba1\u606f\u80a1\u4efd\u59cb\u7ec8\u5b8c\u5168\u7531\u7528\u6237\u53ca\u5176\u94b1\u5305\u4fdd\u7ba1\uff0c\u4ece\u672a\u88ab\u4efb\u4f55\u7b2c\u4e09\u65b9\u6301\u6709\uff0c\u5f71\u54cd\u6216\u6ca1\u6536\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2"
                            }, "2"), "\xa0\xa0WISE\u5408\u7ea6\u529f\u80fd")), r.a.createElement("p", null, "WISE\u5408\u540c\u5177\u6709\u51e0\u4e2a\u5173\u952e\u5c5e\u6027\u548c\u6838\u5fc3\u529f\u80fd\uff0c\u4ee5\u4e0b\u5404\u8282\u5c06\u8be6\u7ec6\u6982\u8ff0\u3002\u8fd9\u91cc\u8fd8\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u91cd\u8981\u7684\u6570\u5b66\u8ba1\u7b97\u548c\u6570\u636e\u7ed3\u6784\u3002\u5728\u9002\u5f53\u7684\u5730\u65b9\uff0c\u8bf4\u660e\u4e86\u7528\u6237\u548c\u591a\u7528\u6237\u6d3b\u52a8\u4ee5\u53ca\u5408\u540c\u72b6\u6001\u6f14\u53d8\u7684\u5404\u79cd\u793a\u4f8b\u65b9\u6848\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-2-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-1"
                            }, "2.1"), " \u4e00\u822c\u6027\u8d28")), r.a.createElement("p", null, "\u5408\u540c\u5c06\u4ee4\u724c\u540d\u79f0\u5b9a\u4e49\u4e3a ", r.a.createElement("code", null, '"WISE\uff08\u667a\u6167\u5e01\uff09"'), ", \u7b26\u53f7\u4e3a", r.a.createElement("code", null, '"WISE"'), ", \u5c0f\u6570\u70b9\u4e3a", r.a.createElement("code", null, "18"), "."), r.a.createElement("p", null, "WISE\u7684\u57fa\u672c\u5355\u4f4d\u79f0\u4e3a ", r.a.createElement("code", null, "YODA"), ". \u4e00\u4e2aWISE\u7531\u4e94\u5341\u5206\u4e4b\u4e00\u7ec4\u6210 (1 \xd7 10", r.a.createElement("sup", null, "18"), ") YODA."), r.a.createElement("p", null, "\u4ece\u7b2c\u5929\u5f00\u59cb\uff0c\u5408\u540c\u4ee5\u5168\u5929\u589e\u91cf\u8ddf\u8e2a\u65f6\u95f4", r.a.createElement("code", null, "0"), ", \u4ece\u5408\u540c\u90e8\u7f72\u4e4b\u524d\u7684UTC\u5348\u591c\u5f00\u59cb\u3002\u7528\u4e8e ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "LT\u65f6\u4ee3"), " \u5728\u4ee3\u7801\u4e2d\u5c06\u662f\u8f83\u9ad8\u7684\u65e5\u671f\u6570\u5b57\uff0c\u800c\u4e0d\u662f\u4ece\u5b57\u9762\u4e0a\u770b\u662f1\u81f350\u7684\u65e5\u671f\u6570\u5b57"), r.a.createElement("p", null, "\u5408\u540c\u6ca1\u6709\u6388\u4e88\u90e8\u7f72\u5e10\u6237\u7684\u7279\u6b8a\u529f\u80fd\uff0c\u6ca1\u6709\u7ba1\u7406\u5bc6\u94a5\uff0c\u4e5f\u6ca1\u6709\u5408\u540c\u6240\u6709\u8005\u7684\u6982\u5ff5\u3002\u6240\u6709\u7528\u6237\uff0c\u5305\u62ec\u521b\u59cb\u4eba \u548c\u5f00\u53d1\u4eba\u5458\uff0c\u90fd\u53ef\u4ee5\u5e73\u7b49\u5730\u4f7f\u7528\u5408\u540c\u7684\u529f\u80fd\u3002"), r.a.createElement("p", null, "\u5408\u540c\u4e00\u65e6\u90e8\u7f72\uff0c\u5c31\u4e0d\u4f1a\u6539\u53d8\u3002\u4e0d\u6d89\u53ca\u4ee3\u7406\u6216\u59d4\u6258\u5408\u540c.")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-1-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-1-1"
                            }, "2.1.1"), " \u4ee3\u5e01\u4f9b\u7ed9\u91cf")), r.a.createElement("p", null, "\u5408\u540c\u6ca1\u6709\u8bbe\u5b9a\u7684\u4ee4\u724c\u4f9b\u5e94\u3002\u7528\u6237\u901a\u8fc7\u8d2d\u4e70\u7684\u603b\u521d\u59cb\u4f9b\u5e94\u91cf ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "\u6d41\u52a8\u6027\u53d8\u538b\u5668"), "\u5c06\u843d\u5165\u5b9a\u4e49\u7684\u8303\u56f4\u5185\uff0c\u90e8\u5206\u7531\u5c40\u9650\u968f\u673a\u6027\u51b3\u5b9a\uff0c\u90e8\u5206\u7531 ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3"
                            }, "\u9080\u8bf7\u5956\u52b1"), "."), r.a.createElement("p", null, "50\u5929\u7684\u6d41\u52a8\u6027\u53d8\u538b\u5668\u5e73\u5747\u6bcf\u5929\u6709500\u4e07\u53ef\u7528\u91cf\uff0c\u5c3d\u7ba1\u6709\u4e9b\u65e5\u5b50\u6d89\u53ca\u968f\u673a\u6027\uff0c\u8fd9\u610f\u5473\u7740\u957f\u671f\u53ef\u7528\u7684\u603b\u4f9b\u5e94\u91cf\u53ef\u80fd\u7ea6\u4e3a2.5\u4ebfWISE\u3002\u7531\u4e8e\u63a8\u8350\u4eba\u5956\u91d1\uff0c\u6700\u591a\u53ef\u4ee5\u989d\u5916\u589e\u52a010\uff05\uff08\u5373\u6700\u591a\u589e\u52a02500\u4e07\uff09"), r.a.createElement("p", null, "\u7136\u540e\u5c06\u603b\u4f9b\u5e94\u91cf\u4e0e\u94f8\u9020\u6279\u6b21\u5339\u914d\uff0c\u7136\u540e ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "\u6c38\u4e45\u6027\u5730\u53d1\u9001\u5230Uniswap"), ".\u7531\u4e8e\u57fa\u91d1\u4f1a\u62a5\u9500ETH\uff0c\u53d1\u9001\u7ed9Uniswap\u7684WISE\u91d1\u989d\u5c06\u6bd4\u901a\u8fc7LT\u548c\u63a8\u8350\u5956\u91d1\u53ef\u94f8\u9020\u7684\u91d1\u989d\u5c1110\uff05\u3002\u65e0\u8bba\u5982\u4f55\uff0c\u53d1\u9001\u7ed9Uniswap\u7684WISE / ETH\u6bd4\u7387\u5c06\u4e0e\u53ef\u94f8\u9020\u7684LT WISE\uff08\u5305\u62ec\u63a8\u8350\u5956\u91d1WISE\uff09\u4e0eLT ETH\u7684\u6bd4\u7387\u5b8c\u5168\u5339\u914d\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fddUniswap\u7684\u521d\u59cb\u4ef7\u683c\u4e0eLT\u7684\u6574\u4f53\u4ef7\u683c\u76f8\u5339\u914d\u3002"), r.a.createElement("p", null, "\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u5047\u8bbe\u968f\u673a\u6027\u8fbe\u5230\u5e73\u5747\u6c34\u5e73\uff0c\u5047\u8bbe\u83b7\u5f97\u4e86\u6240\u6709\u53ef\u80fd\u7684\u63a8\u8350\u4eba\u5956\u91d1\u7684\u4e00\u534a\uff0c\u5e76\u4e14\u5047\u8bbe\u57fa\u91d1\u4f1a\u7684\u62a5\u9500\u4e0a\u9650\u5bfc\u81f4\u5176\u4ec5\u4e3aLT ETH\u76845\uff05\uff0c\u90a3\u4e48\u603b\u521d\u59cb\u4f9b\u5e94\u91cf\u5c06\u4e3a\uff1a"), r.a.createElement("p", null), r.a.createElement("pre", null, r.a.createElement("code", null, "\u57fa\u7840\u4f9b\u5e94\u91cf = 250,000,000 WISE", r.a.createElement("br", null), "\u63a8\u8350\u5956\u52b1 = \u57fa\u7840\u4f9b\u5e94\u91cf * 5% = 12,500,000 WISE", r.a.createElement("br", null), "\u603b\u91cf = \u57fa\u7840\u4f9b\u5e94\u91cf + \u63a8\u8350\u5956\u52b1\u91cf = 262,500,000 WISE", r.a.createElement("br", null), "uniswapBatch = \u603b\u91cf * 95% = 249,375,000 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "\u521d\u59cb\u603b\u91cf = \u603b\u91cf + uniswapBatch = 511,875,000 WISE")), r.a.createElement("p", null, "\u5c3d\u7ba1\u6781\u4e0d\u53ef\u80fd\uff08\u51e0\u4e4e\u4e0d\u53ef\u80fd\uff09\uff0c\u4f46\u7edd\u5bf9\u6700\u4f4e\u7684\u603b\u521d\u59cb\u4f9b\u5e94\u91cf\uff08\u6240\u6709\u968f\u673a\u5929\u6570\u90fd\u8fbe\u5230\u6700\u5c0f\u503c\uff0c\u6ca1\u6709\u63a8\u8350\u5956\u91d1\uff0c\u5e76\u4e14\u8db3\u591f\u4f4e\u7684LT ETH\u603b\u6570\u4f7f\u57fa\u91d1\u4f1a\u507f\u8fd8\u7684\u91d1\u989d\u4ec5\u4e3a10\uff05\uff09\u5c06\u4e3a\uff1a"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u57fa\u7840\u4f9b\u5e94\u91cf = 180,000,010 WISE", r.a.createElement("br", null), "\u63a8\u8350\u5956\u52b1 = \u57fa\u7840\u4f9b\u5e94\u91cf * 0% = 0 WISE", r.a.createElement("br", null), "\u603b\u91cf = \u57fa\u7840\u4f9b\u5e94\u91cf + \u63a8\u8350\u5956\u52b1\u91cf = 180,000,010 WISE", r.a.createElement("br", null), "uniswapBatch = \u603b\u91cf * 90% = 162,000,009 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "totalInitialSupply = totalLTSupply + uniswapBatch = 342,000,019 WISE")), r.a.createElement("p", null, "\u5c3d\u7ba1\u540c\u6837\u4e0d\u592a\u53ef\u80fd\uff08\u51e0\u4e4e\u4e0d\u53ef\u80fd\uff09\uff0c\u4f46\u7edd\u5bf9\u6700\u5927\u53ef\u80fd\u7684\u603b\u521d\u59cb\u4f9b\u5e94\u91cf\uff08\u6240\u6709\u968f\u673a\u65e5\u5747\u83b7\u5f97\u5176\u6700\u5927\u503c\uff0c\u6700\u5927\u63a8\u8350\u5956\u91d1\u4ee5\u53ca\u4f7f\u57fa\u91d1\u4f1a\u62a5\u9500\u7387\u63a5\u8fd10\uff05\u7684\u9ad8LT ETH\u603b\u989d\uff09\u5c06\u4e3a\uff1a"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u57fa\u7840\u4f9b\u5e94\u91cf = 319,999,990 WISE", r.a.createElement("br", null), "\u63a8\u8350\u5956\u52b1 = \u57fa\u7840\u4f9b\u5e94\u91cf * 10% = 31,999,999 WISE", r.a.createElement("br", null), "\u603b\u91cf= \u57fa\u7840\u4f9b\u5e94\u91cf + \u63a8\u8350\u5956\u52b1\u91cf = 351,999,989 WISE", r.a.createElement("br", null), "uniswapBatch = \u603b\u91cf * ~100% = 351,999,989 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "\u521d\u59cb\u603b\u91cf = \u603b\u91cf + uniswapBatch = 703,999,978 WISE")), r.a.createElement("p", null, "\u4ee3\u5e01\u603b\u4f9b\u5e94\u91cf\u5c06 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-4"
                            }, "\u6bcf\u5e74\u4ee54\uff05\u7684\u901f\u5ea6\u81a8\u80c0"), ", \u4ece\u6d41\u52a8\u6027\u53d8\u538b\u5668\u65f6\u4ee3\u7ed3\u675f\u540e\u5f00\u59cb ", r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "\u6d41\u901a\u65f6\u4ee3"), "\u5f00\u59cb\u3002\u4e00\u4e9b\u65b0\u4ee3\u5e01\u5c06\u5728\u3002 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "\u5173\u95ed\u8d28\u62bc"), ", \u548c\u4e00\u4e9b\u94f8\u9020\u7ed9 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "\u8d28\u62bc\u9080\u8bf7\u4eba"), ". \u5982\u679c\u5728\u6307\u5b9a\u7684\u4e00\u5929\u6ca1\u6709\u5173\u95ed\u4efb\u4f55\u80a1\u4efd\uff0c\u5e76\u4e14\u5f53\u5929\u6ca1\u6709\u4efb\u4f55\u80a1\u4efd\u5931\u53bb\u5174\u8da3\uff0c\u90a3\u4e48\u5373\u4f7f\u6307\u5b9a\u4e86\u4ee5\u540e\u518d\u94f8\u9020\uff0c\u5f53\u5929\u5b9e\u9645\u4e0a\u4e5f\u4e0d\u4f1a\u94f8\u9020\u65b0\u7684\u4ee3\u5e01\u3002\u8fc7\u53bb\u7684\u6240\u6709\u65f6\u95f4\u90fd\u88ab\u7acb\u5373\u94f8\u9020\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-2-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "2.2"), "\u6d41\u52a8\u6027\u53d8\u538b\u5668\u65f6\u4ee3")), r.a.createElement("p", null, "WISE\u5408\u540c\u7684\u542f\u52a8\u5c06\u5728\u6700\u521d\u768450\u5929\u9636\u6bb5\u5f00\u59cb\uff0c\u5728\u6b64\u9636\u6bb5\uff0c\u7528\u6237\u53ef\u4ee5\u5411\u5408\u540c\u53d1\u9001ETH\uff08\u6216\u5728Uniswap V2\u4e0a\u4ea4\u6613\u7684\u4efb\u4f55ERC-20\u4ee4\u724c\uff09\u4ee5\u4fdd\u7559WISE\u4ee4\u724c\u3002\u4fdd\u7559\u7684\u4ee4\u724c\u53ef\u4ee5\u662f ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "\u88ab\u5176\u5b83\u7528\u6237\u5f00\u91c7"), " LT\u65f6\u4ee3\u7ed3\u675f\u540e\u5373\u7b2c51\u5929\u5f00\u59cb\u65f6"), r.a.createElement("p", null, "LT\u65f6\u4ee3\u7684\u6bcf\u4e00\u5929\u90fd\u5c06\u6709\u4e00\u5b9a\u6570\u91cf\u7684WISE\u4ee4\u724c\uff0c\u53ef\u4f9b\u5f53\u5929\u5b58\u5165ETH\u7684\u6240\u6709\u4eba\u5458\u4fdd\u7559\u3002\u5927\u591a\u6570\u65e5\u5b50\u5c06\u7cbe\u786e\u63d0\u4f9b\u4e94\u767e\u4e07\u4e2aWISE\uff0c\u800c\u5176\u4ed6\u65e5\u5b50\u5c06\u5176\u53ef\u7528WISE\u6570\u91cf\u968f\u673a\u8bbe\u7f6e\u5728\u9884\u5b9a\u8303\u56f4\u5185\u3002\u8fd9\u4e9b\u968f\u673a\u91d1\u989d\u5c06\u7531\u5408\u540c\u5728\u6bcf\u4e2a\u968f\u673a\u65e5\u7ed3\u675f\u540e\u4e0d\u4e45\u901a\u8fc7\u5229\u7528 ", r.a.createElement("a", {
                                href: "https://provable.xyz/"
                            }, "\u53ef\u9a8c\u8bc1"), " \uff08\u4ee5\u524d\u79f0\u4e3a\u201c Oraclize\u201d\uff09\u667a\u80fd\u5408\u7ea6\u7684\u968f\u673a\u6570\u636e\u6e90\u63a5\u53e3\u3002\u751f\u6210\u7684\u968f\u673a\u6027\u4ee5\u4e0d\u53ef\u4fe1\u4e14\u53ef\u8bc1\u660e\u7684\u5bc6\u7801\u5b89\u5168\u65b9\u5f0f\u5728\u94fe\u4e0a\u4f20\u9012\u3002\u6709\u5173Provable\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ", r.a.createElement("a", {
                                href: "https://provable.xyz/papers/random_datasource-rev1.pdf"
                            }, "random \u6570\u636e\u6e90\u767d\u76ae\u4e66"), " \u548c\u4ed6\u4eec\u7684 ", r.a.createElement("a", {
                                href: "https://docs.provable.xyz/#security-deep-dive"
                            }, "\u5b89\u5168"), "."), r.a.createElement("p", null, "\u6bcf\u5929\u53ef\u7528\u7684WISE\u6700\u7ec8\u4f1a\u6309\u6bd4\u4f8b\u76f4\u63a5\u5206\u914d\u7ed9\u5f53\u5929\u5b58\u5165ETH\u7684\u7528\u6237\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5728\u7279\u5b9a\u7684LT\u65e5\u8fdb\u884c\u9884\u8ba2\u7684\u7528\u6237\u4ee5\u540e\u5c06\u80fd\u591f\u63d0\u53d6\u5f53\u5929\u53ef\u7528WISE\u7684\u5206\u6570\uff0c\u8be5\u5206\u6570\u7b49\u4e8e\u4ed6\u4eec\u4e2a\u4eba\u53d1\u9001\u7684\u5f53\u65e5\u603bETH\u7684\u5206\u6570\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "2.2.1"), " \u4ee3\u5e01\u9884\u7559")), r.a.createElement("p", null, "\u5728LT Epoch\u7684\u4efb\u4f55\u7ed9\u5b9a\u65e5\u671f\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u5c06ETH\uff08\u6216\u5728Uniswap V2\u4e0a\u4ea4\u6613\u7684\u4efb\u4f55ERC-20\u4ee4\u724c\uff09\u53d1\u9001\u5230\u5408\u540c\uff0c\u5e76\u5c06\u5176\u5206\u914d\u7ed9\u5c1a\u672a\u7ed3\u675f\u7684LT Epoch\u7684\u4efb\u4f55\u4e00\u5929\u3002\u6211\u4eec\u5c06\u6b64\u52a8\u4f5c\u79f0\u4e3a\u201c\u4ee4\u724c\u4fdd\u7559\u201d\u3002"), r.a.createElement("p", null, "\u4f8b\u5982\uff0c\u5728\u7b2c12\u5929\uff0c\u7528\u6237\u53ef\u4ee5\u5c06ETH\u53d1\u9001\u5e76\u5206\u914d\u7ed9\u7b2c12\u201350\u5929\u4e2d\u7684\u4efb\u4f55\u4e00\u5929\uff0c\u4f46\u4e0d\u80fd\u53d1\u9001\u81f3\u7b2c1-11\u5929\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5929\u5df2\u7ecf\u7ed3\u675f\u3002"), r.a.createElement("p", null, "\u6bcf\u4e2a\u4ee4\u724c\u9884\u7559\u90fd\u5206\u914d\u7ed9\u4e00\u5929\uff0c\u4f46\u662f\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u610f\u613f\u8fdb\u884c\u4efb\u610f\u6570\u91cf\u7684\u9884\u5b9a\uff0c\u5e76\u6309\u7167\u81ea\u5df1\u7684\u610f\u613f\u8fdb\u884c\u4e0d\u540c\u7684\u65e5\u671f\u3002"), r.a.createElement("p", null, "WISE\u5408\u540c\u524d\u7aef\u8fd8\u5c06\u5305\u62ec\u7528\u6237\u80fd\u591f\u5728\u6240\u6709\u5269\u4f59\u7684LT\u5929\u4e2d\u5e73\u5747\u5206\u914d\u5355\u4e2a\u9884\u7559\u91d1\u989d\u7684ETH\uff08\u6216ERC-20\uff09\u7684\u529f\u80fd\u3002\u8fd9\u4e2a \u201c\u5e73\u5747\u6210\u672c\u201d \u8be5\u529f\u80fd\u4e3a\u5e0c\u671b\u5728\u6bcf\u4e2aLT\u5929\u4e2d\u4fdd\u7559\u76f8\u540c\u65f6\u95f4\u7684\u7528\u6237\u8282\u7701\u4e86gas"), r.a.createElement("p", null, "\u53ef\u4ee5\u4f7f\u7528ETH\u8fdb\u884c\u9884\u8ba2\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528Uniswap V2\u4e0a\u4ea4\u6613\u7684\u4efb\u4f55ERC-20\u4ee4\u724c\u8fdb\u884c\u9884\u8ba2\u3002\u8fd9\u662f\u901a\u8fc7\u4e0eUniswap\u76f4\u63a5\u96c6\u6210\u5b8c\u6210\u7684\uff0cUniswap\u5c06ERC-20\u4ea4\u6362\u4e3aETH\uff0c\u4f5c\u4e3a\u9884\u8ba2\u4ea4\u6613\u7684\u4e00\u90e8\u5206\u3002\u8fd9\u5728\u529f\u80fd\u4e0a\u4e0e\u7528\u6237\u81ea\u5df1\u5728Uniswap\u4e0a\u5c06ERC-20\u4ea4\u6362\u4e3aETH\uff0c\u7136\u540e\u5c06ETH\u53d1\u9001\u5230WISE\u5408\u540c\u8fdb\u884c\u4ee4\u724c\u4fdd\u7559\u76f8\u540c\u3002\u4f7f\u7528WISE\u9884\u8ba2\u754c\u9762\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u597d\u5904\u662f\u53ef\u4ee5\u4e3a\u7528\u6237\u8282\u7701\u4e00\u4e9b\u6c7d\u6cb9\u8d39\u548c\u65f6\u95f4\u3002"), r.a.createElement("p", null, "\u6bcf\u4e2a\u5355\u4e2a\u4ee4\u724c\u4fdd\u7559\u5fc5\u987b\u5177\u6709\u6700\u5c0f\u7684ETH\u6570\u91cf\uff0c\u4ee5\u4f7f\u5783\u573e\u90ae\u4ef6\u653b\u51fb\u7684\u6210\u672c\u8fc7\u9ad8\u3002\u5177\u4f53\u7684\u6700\u4f4e\u91d1\u989d\u5c06\u5728\u8f83\u665a\u7684\u53d1\u5e03\u65e5\u671f\u786e\u5b9a\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u64b0\u5199\u672c\u6587\u548c\u53d1\u5e03\u5408\u540c\u4e4b\u95f4\uff0cETH\u7684\u4ef7\u683c\u53ef\u80fd\u4f1a\u53d1\u751f\u91cd\u5927\u53d8\u5316\u3002\u6700\u4f4e\u4ef7\u683c\u53ef\u80fd\u572810\u7f8e\u5143\u5de6\u53f3\u7684\u4ee5\u592a\u574a\u9644\u8fd1\u3002"), r.a.createElement("p", null, "\u8be5\u5408\u540c\u5c06\u63d0\u4f9b\u516c\u5171\u754c\u9762\uff0c\u4ee5\u67e5\u770b\u6240\u6709\u7528\u6237\u5f53\u524d\u5206\u914d\u7ed9\u6bcf\u4e2aLT Epoch\u65e5\u7684ETH\u603b\u91cf\uff0c\u4ee5\u53ca\u6bcf\u5929\u53ef\u7528\u7684WISE\u603b\u91cf\uff08\u5728\u786e\u5b9a\u4f9b\u5e94\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u662f\u968f\u673a\u5929\u6570\uff09\u3002\u5bf9\u4e8e\u5c1a\u672a\u6700\u7ec8\u786e\u5b9a\u4f9b\u5e94\u7684\u5929\u6570\uff0c\u6700\u5c0f/\u6700\u5927\u8303\u56f4\u4e5f\u53ef\u4ece\u5408\u540c\u4e2d\u83b7\u53d6\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-2"
                            }, "2.2.2"), " \u6bcf\u65e5LT\u4f9b\u5e94\u65f6\u95f4\u8868")), r.a.createElement("p", null, "LT\u6bcf\u5929\u5e73\u5747\u6709500\u4e07\u4e2aWISE\u53ef\u4f9b\u9884\u8ba2\u3002\u67d0\u4e9b\u65e5\u671f\u7684\u6570\u91cf\u968f\u673a\u786e\u5b9a\uff0c\u53ea\u6709\u51e0\u4ebf\u4e2aWISE\u6ce2\u52a8\uff0c\u800c\u53e6\u4e00\u4e9b\u65e5\u5b50\u5219\u53d8\u5316\u5f88\u5927\uff0c\u8303\u56f4\u4ece\u5355\u4e2aWISE\u5230\u4e00\u5343\u4e07WISE\uff08\u6280\u672f\u4e0a\u4e3a9,999,999 WISE\uff0c\u4ee5\u4e25\u683c\u4fdd\u6301\u5e73\u5747500\u4e07\u6bcf\u5929\uff09\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0cLT\u65f6\u4ee3\u4e3a\u5e0c\u671b\u4e0eETH\u8d4c\u535a\u7684\u7528\u6237\u4ee5\u53ca\u5904\u4e8e\u5404\u79cd\u98ce\u9669/\u56de\u62a5\u6c34\u5e73\u7684\u7528\u6237\u63d0\u4f9b\u4e86\u5404\u79cd\u4ee4\u4eba\u5174\u594b\u7684\u9009\u62e9\u3002"), r.a.createElement("p", null, "\u4e0b\u8868\u6982\u8ff0\u4e86LT\u65f6\u4ee3\u7684\u6bcf\u4e00\u5929\u6709\u591a\u5c11WISE\u53ef\u7528\u4e8e\u7528\u6237\u9884\u8ba2\u3002\u5728\u5927\u591a\u6570\u65e5\u5b50\u91cc\uff0c\u6070\u597d\u6709\u4e94\u767e\u4e07\u4e2aWISE\u53ef\u7528\u3002\u5176\u4f59\u663e\u793a\u4e24\u4e2a\u4f9b\u5e94\u503c\uff1a\u5f53\u5929\u7684\u6700\u5c0f\u53ef\u7528\u91cf\u548c\u6700\u5927\u53ef\u7528\u91cf\u3002\u6bcf\u5929\u7528\u989c\u8272\u6807\u8bb0\u76f8\u5bf9\u98ce\u9669\u6c34\u5e73\uff0c\u4ece ", r.a.createElement("span", {
                                className: "no-risk"
                            }, "\u6ca1\u6709"), " \u81f3 ", r.a.createElement("span", {
                                className: "high-risk"
                            }, "\u9ad8"), "):"), r.a.createElement("div", {
                                className: "table-container"
                            }, r.a.createElement("table", {
                                className: "cal"
                            }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "Sun"), r.a.createElement("th", null, "Mon"), r.a.createElement("th", null, "Tue"), r.a.createElement("th", null, "Wed"), r.a.createElement("th", null, "Thu"), r.a.createElement("th", null, "Fri"), r.a.createElement("th", null, "Sat"))), r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null), r.a.createElement("td", null), r.a.createElement("td", null), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 11", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 12", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 13", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 14", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 15", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 16", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 17", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk1"
                            }, "Nov 18", r.a.createElement("br", null), r.a.createElement("div", null, "5.5M", r.a.createElement("br", null), "4.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 19", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk1"
                            }, "Nov 20", r.a.createElement("br", null), r.a.createElement("div", null, "5.5M", r.a.createElement("br", null), "4.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 21", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Nov 22", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 23", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk2"
                            }, "Nov 24", r.a.createElement("br", null), r.a.createElement("div", null, "6M", r.a.createElement("br", null), "4M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 25", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk2"
                            }, "Nov 26", r.a.createElement("br", null), r.a.createElement("div", null, "6M", r.a.createElement("br", null), "4M")), r.a.createElement("td", {
                                className: "risk2"
                            }, "Nov 27", r.a.createElement("br", null), r.a.createElement("div", null, "6M", r.a.createElement("br", null), "4M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 28", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Nov 29", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Nov 30", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk3"
                            }, "Dec 1", r.a.createElement("br", null), r.a.createElement("div", null, "6.5M", r.a.createElement("br", null), "3.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 2", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk3"
                            }, "Dec 3", r.a.createElement("br", null), r.a.createElement("div", null, "6.5M", r.a.createElement("br", null), "3.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 4", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk3"
                            }, "Dec 5", r.a.createElement("br", null), r.a.createElement("div", null, "6.5M", r.a.createElement("br", null), "3.5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 6", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 7", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 8", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk4"
                            }, "Dec 9", r.a.createElement("br", null), r.a.createElement("div", null, "7M", r.a.createElement("br", null), "3M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 10", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk4"
                            }, "Dec 11", r.a.createElement("br", null), r.a.createElement("div", null, "7M", r.a.createElement("br", null), "3M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 12", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 13", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 14", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk5"
                            }, "Dec 15", r.a.createElement("br", null), r.a.createElement("div", null, "7.5M", r.a.createElement("br", null), "2.5M")), r.a.createElement("td", {
                                className: "risk5"
                            }, "Dec 16", r.a.createElement("br", null), r.a.createElement("div", null, "7.5M", r.a.createElement("br", null), "2.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 17", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk5"
                            }, "Dec 18", r.a.createElement("br", null), r.a.createElement("div", null, "7.5M", r.a.createElement("br", null), "2.5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 19", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 20", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 21", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 22", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 23", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 24", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 25", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 26", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1"))), r.a.createElement("tr", null, r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 27", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk6"
                            }, "Dec 28", r.a.createElement("br", null), r.a.createElement("div", null, "10M", r.a.createElement("br", null), "1")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 29", r.a.createElement("br", null), r.a.createElement("div", null, "5M")), r.a.createElement("td", {
                                className: "risk0"
                            }, "Dec 30", r.a.createElement("br", null), r.a.createElement("div", null, "5M"))))))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-3"
                            }, "2.2.3"), "\xa0\xa0Reservation Referrals"), r.a.createElement("p", null, "WISE\u5408\u540c\u5177\u6709\u76f4\u63a5\u7684\u4e00\u7ea7\u63a8\u8350\u7cfb\u7edf\uff0c\u5f53\u7528\u6237\u5728LT\u4e2d\u4fdd\u7559WISE\u4ee4\u724c\u65f6\uff0c\u8be5\u7cfb\u7edf\u4f1a\u540c\u65f6\u5956\u52b1\u63a8\u8350\u4eba\u548c\u88ab\u63a8\u8350\u4eba\u3002\u6b64\u63a8\u8350\u7cfb\u7edf\u662f\u4e00\u79cd\u6fc0\u52b1\u63aa\u65bd\uff0c\u53ef\u4ee5\u5e2e\u52a9\u589e\u52a0\u53d1\u9001\u7684ETH\u6570\u91cf\uff0c\u4ece\u800c\u4e3aUniswap\u4e0a\u66f4\u5927\uff0c\u66f4\u5f3a\u5927\u7684\u521d\u59cb\u6d41\u52a8\u8d44\u91d1\u6c60\u63d0\u4f9b\u8d44\u91d1\u3002"), r.a.createElement("p", null, "\u5f53\u7528\u6237\u8fdb\u884c ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "\u4ee3\u5e01\u9884\u8ba2"), ", \u524d\u7aef\u754c\u9762\u68c0\u67e5\u4ed6\u4eec\u7684\u6d4f\u89c8\u5668\u662f\u5426\u5b58\u50a8\u4e86\u5f15\u7528cookie\u3002\u5982\u679c\u5b58\u5728\u8fd9\u6837\u7684cookie\uff0c\u5219\u5408\u540c\u4f1a\u8bb0\u5f55\u63a8\u8350\u4eba\u7684\u4ee5\u592a\u574a\u5730\u5740\uff0c\u5e76\u5c06\u5176\u4e0e\u88c1\u5224\u7684\u4ee3\u5e01\u9884\u8ba2\u76f8\u5173\u8054\u3002\u5408\u540c\u8fd8\u5c06\u7528\u6237\u7684\u4ee3\u5e01\u9884\u8ba2\u6807\u8bb0\u4e3a\u5df2\u901a\u8fc7\u5f15\u8350\uff0c\u5e76\u4e14\u8be5\u9884\u8ba2\u88ab\u8ba4\u4e3a\u6bd4\u5b9e\u9645\u591a\u4e8610\uff05\u7684ETH\u3002\u5f53\u7528\u6237 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "\u94f8\u9020\u4ed6\u4eec\u7684\u4fdd\u7559\u4ee4\u724c"), " \u5728LT\u7eaa\u5143\u7ed3\u675f\u4e4b\u540e\uff0c\u901a\u8fc7\u8f6c\u4ecb\u8fdb\u884c\u7684\u6bcf\u4e2a\u4ee4\u724c\u9884\u7559\u5c06\u6bd4\u672a\u901a\u8fc7\u8f6c\u4ecb\u8fdb\u884c\u7684WISE\u4ea7\u751f10\uff05\u7684WISE\u3002"), r.a.createElement("p", null, "\u7528\u6237\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7\u5355\u51fb\u5176\u4ed6\u5f15\u8350\u6765\u6e90\u94fe\u63a5\u6765\u66f4\u6539\u5b58\u50a8\u5728\u5176\u6d4f\u89c8\u5668\u4e2d\u7684\u5f15\u8350cookie\u3002\u5982\u679c\u4ed6\u4eec\u8fd9\u6837\u505a\uff0c\u4ed6\u4eec\u5c06\u6765\u7684\u4ee4\u724c\u4fdd\u7559\u5c06\u4e0e\u65b0\u7684\u5f15\u8350\u6765\u6e90\u76f8\u5173\u8054\u3002\u8be5\u7528\u6237\u8fc7\u53bb\u7684\u6240\u6709\u4ee4\u724c\u4fdd\u7559\u5747\u4fdd\u6301\u4e0d\u53d8\uff1b\u4ed6\u4eec\u7684\u5148\u524d\u63a8\u8350\u4eba\u4e0d\u4f1a\u56e0\u5176\u73b0\u6709\u7684\u63a8\u8350\u4ee3\u5e01\u4fdd\u7559\u800c\u5931\u53bb\u4fe1\u7528\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-2-3-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "2.2.3.1"), "\xa0\xa0Referrer Bonuses"), r.a.createElement("p", null, "\u5f53LT\u7eaa\u5143\u7ed3\u675f\u65f6\uff0c\u901a\u8fc7\u5176\u63a8\u8350\u7528\u6237\u4ee4\u724c\u4fdd\u7559\u5c06\u8db3\u591f\u7684ETH\u63a8\u8350\u7ed9\u7cfb\u7edf\u7684\u63a8\u8350\u4eba\u53ef\u4ee5\u521b\u5efa\u4e00\u4e9b\u5956\u52b1WISE\u3002"), r.a.createElement("p", null, "LT\u63a8\u8350\u4eba\u5956\u52b1\u7cfb\u7edf\u5206\u4e3a\u4e24\u4e2a\u5c42\u6b21\u3002\u5956\u91d1\uff08\u4ee5WISE\u652f\u4ed8\uff09\u57fa\u4e8e\u5176\u63a8\u8350\u94fe\u63a5\u5e26\u7ed9LT\u7684\u603bETH\u6570\u91cf\uff1a"), r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("i", null, "1 - 49.999999999999999999 ETH"), r.a.createElement("br", null), r.a.createElement("strong", null, "\u7ea2\u5229= 0.05 ETH\uff08\u4ee5WISE\u652f\u4ed8\uff09")), r.a.createElement("li", null, r.a.createElement("i", null, "\u53c2\u800350\u4e2a\u6216\u66f4\u591a\u7684ETH"), r.a.createElement("br", null), r.a.createElement("strong", null, "\u5956\u91d1= ETH\u768410\uff05\uff08\u4ee5WISE\u652f\u4ed8\uff09\uff0c\u4ee5\u53ca\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "\u201cCM\u9080\u8bf7\u201d"), " \u72b6\u6001"))), r.a.createElement("p", null, "\u4f8b\u5b50:"), r.a.createElement("ul", null, r.a.createElement("li", null, "\u7231\u4e3d\u4e1d\u6307\u7684\u662f\u51e0\u4e2a\u670b\u53cb\uff0c\u4ed6\u4eec\u603b\u5171\u5411LT\u53d1\u9001\u4e860.83 ETH\u3002\u7231\u4e3d\u4e1d\u672a\u80fd\u8fbe\u5230\u7b2c\u4e00\u7b49\u7ea7\u7684\u6700\u4f4e\u8981\u6c42\uff0c\u56e0\u6b64\u5979\u6ca1\u6709\u8d5a\u5230\u4efb\u4f55WISE\u5956\u91d1\u3002"), r.a.createElement("li", null, "Bob\u63a8\u8350\u4e86\u51e0\u4e2a\u670b\u53cb\uff0c\u8fd9\u4e9b\u670b\u53cb\u603b\u5171\u5411LT\u53d1\u9001\u4e863.6 ETH\u3002\u9c8d\u52c3\u6709\u8d44\u683c\u83b7\u5f97\u7b2c\u4e00\u7ea7\u5956\u91d1\uff0c\u56e0\u6b64\u4ed6\u83b7\u5f97\u4e86\u56fa\u5b9a\u76840.05 ETH\u7684WISE\u5956\u91d1\u3002"), r.a.createElement("li", null, "Eve\u521b\u5efa\u4e86\u591a\u4e2aWISE\u89c6\u9891\uff0c\u5e76\u5728\u5176\u4e0a\u53d1\u5e03\u4e86\u5979\u7684\u63a8\u8350\u94fe\u63a5\u3002\u5355\u51fb\u5979\u7684\u5f15\u8350\u94fe\u63a5\u7684\u7528\u6237\u5c06\u603b\u517164 ETH\u53d1\u9001\u5230LT\u3002\u590f\u5a03\u6709\u8d44\u683c\u83b7\u5f97\u6700\u9ad8\u5956\u91d1\u7ea7\u522b\uff0c\u56e0\u6b64\u5979\u83b7\u5f97\u4e866.4 ETH\u7684WISE\u4ee5\u53ca\u6c38\u4e45\u6027\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "\u201cCM\u63a8\u8350\u4eba\u201d"), " \u72b6\u6001.")), r.a.createElement("p", null, r.a.createElement("i", null, "\u6ce8\u610f\uff1a\u6240\u6709\u63a8\u8350\u5956\u91d1\u5747\u4ee5WISE\u652f\u4ed8\u3002 LT\u7ed3\u675f\u65f6\uff0c\u901a\u8fc7\u67e5\u770b\u6240\u6709\u7528\u6237\u53d1\u9001\u7684ETH\u603b\u91cf\u4ee5\u53ca\u53ef\u4f9b\u9884\u8ba2\u7684WISE\u603b\u91cf\uff0c\u8ba1\u7b97\u51faLT WISE / ETH\u7684\u6709\u6548\u603b\u6c47\u7387\u3002\u8be5\u6bd4\u7387\u7136\u540e\u7528\u4e8e\u8ba1\u7b97\u6bcf\u6b21\u63a8\u8350\u5956\u91d1\u7684WISE\u91d1\u989d."))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("div", {
                                className: "app-page-title--heading text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-2-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "2.3"), "\u6d41\u901a\u65f6\u4ee3")), r.a.createElement("p", null, "LT\u65f6\u4ee3\u6700\u540e\u4e00\u5929\u7ed3\u675f\u65f6\uff0c\u5faa\u73af\u65f6\u4ee3\u5f00\u59cb\u3002\u6b64\u65f6\uff0c\u65e0\u6cd5\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u4ee4\u724c\u4fdd\u7559\u3002"), r.a.createElement("p", null, r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "\u9884\u7559WISE"), "\u53ca", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "\u63a8\u8350\u4eba\u5956\u91d1WISE"), " \u73b0\u5728\u53ef\u4ee5\u7531\u7528\u6237\u968f\u610f\u521b\u5efa\u3002\u7528\u6237\u53ef\u4ee5\u5f00\u59cb ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "\u8d28\u62bc WISE"), ". \u53d1\u9001\u5230LT\u4e2d\u7684\u6240\u6709ETH\u768490\uff05\u6216\u66f4\u591a\uff0c\u5e76\u81ea\u52a8\u5339\u914d\u4e00\u6279WISE ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "\u53d1\u9001\u81f3 Uniswap"), ", \u56e0\u6b64\u7528\u6237\u53ef\u4ee5\u5728\u90a3\u91cc\u5f00\u59cb\u4ea4\u6613WISE\u548cETH\u3002\u6240\u6709 ", r.a.createElement("a", {
                                href: "/docs#sec-2-4"
                            }, "\u6807\u51c6ERC-20\u529f\u80fd"), " \u73b0\u5728\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6d89\u53ca\u94f8\u9020\u4ee4\u724c\u7684\u4ea7\u54c1\u3002\u5728\u53d1\u884c\u7eaa\u5143\u7684\u7b2c\u5341\u4e94\u5929\u5f00\u59cb\u65f6\uff0c\u5c06\u4f1a\u6709\u4e00\u6b21\u81ea\u52a8 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "\u4efd\u989d\u4ef7\u683c"), " \u589e\u52a010\uff05."), r.a.createElement("p", null, "\u4e00\u65e6LT\u7eaa\u5143\u7ed3\u675f\uff0c\u5408\u540c\u4e2d\u5c31\u4f1a\u6709\u4e00\u4e2a\u516c\u5171\u529f\u80fd\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8c03\u7528\u5b83\u6765\u89e6\u53d1\u4ee5\u4e0b\u4e00\u6b21\u6027\u52a8\u4f5c\u5e8f\u5217\u6765\u542f\u52a8Circulation\u7eaa\u5143\uff1a"), r.a.createElement("ol", null, r.a.createElement("li", null, "\u8ba1\u7b97\u53d1\u9001\u5230LT\u7684\u603bETH\u3002\u9884\u755910\uff05\u62162,000 ETH\uff0c\u4ee5\u8f83\u4f4e\u8005\u4e3a\u51c6\u3002 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-2"
                            }, "\u57fa\u91d1\u4f1a\u7684\u62a5\u9500"), " \u5728\u4e0b\u9762\u7684\u6b65\u9aa44\u4e2d\u6267\u884c\u3002\u8be5ETH\u5269\u4f59\u768490\uff05\uff08\u6216\u66f4\u591a\uff09\u662f ", r.a.createElement("strong", null, "\u201cUniswap\u4f9bEther\u201d"), "."), r.a.createElement("li", null, "\u8ba1\u7b97\u7531\u4e8e\u4ee4\u724c\u4fdd\u7559\u548c\u63a8\u8350\u4eba\u5956\u52b1\u800c\u53ef\u94f8\u9020\u7684\u603bWISE\u3002\u8ba1\u7b97\u6b64WISE\u7684\u76f8\u540c\u5206\u6570\uff0890\uff05\u6216\u66f4\u9ad8\uff09\uff0c\u8be5\u5206\u6570\u5728\u4e0a\u9762\u7684\u6b65\u9aa41\u4e2d\u7528\u4e8e\u786e\u5b9aUniswap\u50a8\u5907\u919a\u3002\u7acb\u5373\u94f8\u9020\u65b0\u7684WISE\u6570\u91cf. \u8fd9\u662f ", r.a.createElement("strong", null, "\u201cUniswap\u6761\u6b3eWISE\u201d"), "."), r.a.createElement("li", null, "\u5c06\u201c Uniswap\u51c6\u5907\u91d1\u919a\u201d\u548c\u201c Uniswap\u51c6\u5907\u91d1WISE\u201d\u8f6c\u79fb\u5230WISE / ETH Uniswap\u4ea4\u6362\u5bf9\u5408\u7ea6\uff0c\u5f62\u6210\u5176\u521d\u59cb\u6d41\u52a8\u8d44\u91d1\u6c60\u3002\u4f5c\u4e3a\u6b64\u8f6c\u79fb\u7684\u4e00\u90e8\u5206\uff0cWISE\u5408\u540c\u4eceUniswap\u5408\u540c\u4e2d\u6536\u53d6\u4e00\u5b9a\u6570\u91cf\u7684UNI-V2\u6d41\u52a8\u6027\u4ee3\u5e01\uff0c\u5e76\u901a\u8fc7\u5c06\u5176\u8f6c\u79fb\u5230\u5df2\u77e5\u7684\u70e7\u5f55\u5730\u5740\u6765\u7acb\u5373\u8fdb\u884c\u70e7\u5236\u3002"), r.a.createElement("li", null, "\u5c06\u5728\u6b65\u9aa41\u4e2d\u9884\u7559\u7684LT ETH\u768410\uff05\uff08\u6216\u66f4\u5c11\uff09\u8f6c\u79fb\u5230The Wise Foundations\u4ee5\u592a\u574a\u5730\u5740\u3002"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "2.3.1"), "\xa0\xa0Uniswap\u89c4\u5b9a"), r.a.createElement("p", null, "\u90e8\u7f72WISE\u5408\u540c\u65f6\u6267\u884c\u7684WISE\u5408\u540c\u7684\u6784\u9020\u51fd\u6570\u5c06\u8c03\u7528Uniswap V2\u5de5\u5382\u5408\u540c\uff0c\u4ee5\u521b\u5efaUniswap WISE / ETH\u4ea4\u6362\u5bf9\u5408\u540c\u3002\u8be5\u65b0\u521b\u5efa\u7684\u4ea4\u6362\u5408\u540c\u7684\u5730\u5740\u5c06\u5728\u5185\u90e8\u5b58\u50a8\u5728WISE\u5408\u540c\u4e2d"), r.a.createElement("p", null, "\u8fd9\u4e2a\u65b0\u521b\u5efa\u7684Uniswap WISE / ETH\u4ea4\u6362\u5bf9\u5408\u7ea6\u5c06\u4e00\u76f4\u5904\u4e8e\u4f11\u7720\u72b6\u6001\uff0c\u76f4\u5230\u5faa\u73af\u7eaa\u5143\u5f00\u59cb\u5e76\u4e14\u4f7f\u7528\u5b58\u50a8\u7684\u5730\u5740\u6267\u884cUniswap\u62e8\u5907\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u6ca1\u6709\u94f8\u9020\u7684WISE\uff0c\u56e0\u6b64\u5728\u6b64\u4e4b\u524d\u65e0\u6cd5\u6dfb\u52a0\u6d41\u52a8\u6027\u3002"), r.a.createElement("p", null, "\u4f5c\u4e3a\u5411\u4ea4\u6362\u5bf9\u5408\u540c\u53d1\u9001Uniswap\u6761\u6b3eWISE\u548cETH\u7684\u4e00\u90e8\u5206\uff0c\u4f7f\u7528\u4e86UniswapV2Router\u5408\u540c\uff0c\u8be5\u5408\u540c\u5728\u5185\u90e8\u5c06ETH\u5305\u88c5\u4e3aWETH\uff08\u5305\u88c5\u7684ETH\uff09\uff0c\u8fd9\u662fUniswap V2\u4e2d\u7684\u6807\u51c6\u3002"), r.a.createElement("p", null, "\u4f5c\u4e3aUniswap\u8bbe\u7f6e\u4ea4\u6613\u7684\u4e00\u90e8\u5206\uff0cUniswapV2Router\u5408\u540c\u5411WISE\u5408\u540c\u8fd4\u56de\u4e00\u5b9a\u6570\u91cf\u7684UNI-V2\u6d41\u52a8\u6027\u4ee4\u724c\u3002\u8fd9\u4e9bUNI-V2\u6d41\u52a8\u6027\u4ee3\u5e01\u4ee3\u8868WISE\u5408\u540c\u521a\u521a\u53d1\u9001\u7684\u6d41\u52a8\u6027\u6c60\u7684\u6240\u6709\u6743\uff0c\u5e76\u4e14\u5177\u6709\u64a4\u56de\u8be5\u6d41\u52a8\u6027\u7684\u552f\u4e00\u6743\u529b\u3002 WISE\u5408\u540c\u6ca1\u6709\u5141\u8bb8\u8fd9\u79cd\u6d41\u52a8\u6027\u63d0\u53d6\u7684\u4ee3\u7801\u6216\u529f\u80fd\u3002\u4f46\u662f\uff0c\u4f5c\u4e3aWise Foundation\u81f4\u529b\u4e8e\u4f7fWISE\u6210\u4e3a\u5b8c\u5168\u4e0d\u4fe1\u4efb\u7cfb\u7edf\u7684\u627f\u8bfa\u7684\u8fdb\u4e00\u6b65\u4f53\u73b0\uff0cWISE\u5408\u540c\u4e00\u7ecf\u6536\u5230\uff0c\u5c06\u81ea\u52a8\uff0c\u4e0d\u53ef\u64a4\u9500\u5730\u9500\u6bc1\u8fd9\u4e9bUNI-V2\u6d41\u52a8\u6027\u4ee3\u5e01\u3002\u53ef\u4ee5\u901a\u8fc7\u5c06\u5b83\u4eec\u8f6c\u79fb\u5230\u5df2\u77e5\u7684\u201c\u523b\u5f55\u5730\u5740\u201d\u6765\u5b8c\u6210\uff0c\u4f8b\u5982", r.a.createElement("code", null, "0x0"), "."), r.a.createElement("p", null, "Uniswap\u6761\u6b3e\u5b8c\u6210\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u4f7f\u7528Uniswap\u7684\u524d\u7aef\u5c06WISE\u4ea4\u6362\u4e3aETH\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u4ed6\u4eec\u8fd8\u53ef\u4ee5\u9009\u62e9\u5b58\u5165\u81ea\u5df1\u7684WISE / ETH\u6d41\u52a8\u8d44\u91d1\u6c60\uff0c\u4ee5\u4ece\u4ea4\u6613\u5546\u90a3\u91cc\u6536\u53d6\u8d39\u7528\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-2"
                            }, "2.3.2"), "\xa0\xa0Wise\u7684\u57fa\u91d1\u4f1a\u62a5\u9500"), r.a.createElement("p", null, "\u5728\u90e8\u7f72WISE\u5408\u540c\u4e4b\u524d\uff0cWise\u57fa\u91d1\u4f1a\u5c06\u786e\u5b9a\u5176\u5728\u5f00\u53d1\u548c\u542f\u52a8WISE\u4e2d\u4ea7\u751f\u7684\u603b\u8d39\u7528\u3002\u8fd9\u4e9b\u5c06\u5305\u62ec\u652f\u4ed8\u7ed9\u5f00\u53d1\u4eba\u5458\u7684\u5de5\u8d44\uff0c\u652f\u4ed8\u7ed9\u5f8b\u5e08\u7684\u8d39\u7528\uff0c\u8425\u9500\u652f\u51fa\u4ee5\u53ca\u5ba1\u8ba1\u6210\u672c\u3002"), r.a.createElement("p", null, "\u8be5\u8d39\u7528\u603b\u989d\u5728\u5408\u540c\u6e90\u4ee3\u7801\u4e2d\u8868\u793a\u4e3a2,000 ETH\u7684\u786c\u7f16\u7801\u91d1\u989d\u3002"), r.a.createElement("p", null, "\u5f53LT\u7eaa\u5143\u5173\u95ed\u4e14\u5faa\u73af\u7eaa\u5143\u5f00\u59cb\u65f6\uff0c\u9001\u5165LT\u7684\u603bETH\u5c06\u5206\u4e3a\u4e24\u4e2a\u5b58\u50a8\u6bb5\uff1a"), r.a.createElement("ul", null, r.a.createElement("li", null, "LT ETH\u768410\uff05\uff08\u4e0d\u8d85\u8fc72,000 ETH\uff09"), r.a.createElement("li", null, "\u6240\u6709\u5269\u4f59\u7684LT ETH")), r.a.createElement("p", null, "\u7136\u540e\u5c0610\uff05\uff08\u6216\u66f4\u5c11\uff09\u7684ETH\u6876\u8f6c\u79fb\u5230The Wise Foundation\u62e5\u6709\u7684\u4ee5\u592a\u574a\u5730\u5740\u3002\u53e6\u4e00\u4e2a\u5b58\u50a8\u6876\uff08\u8d85\u8fc790\uff05\uff09\u88ab\u53d1\u9001\u5230Uniswap\uff0c\u4e3aWISE\u521b\u5efa\u7b2c\u4e00\u4e2a\u6d41\u52a8\u8d44\u91d1\u6c60\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-3"
                            }, "2.3.3"), "\xa0\xa0\u94f8\u9020\u5e01"), r.a.createElement("p", null, "\u4e00\u65e6LT\u65f6\u4ee3\u7ed3\u675f\u5e76\u4e14\u6d41\u901a\u65f6\u4ee3\u5df2\u7ecf\u5f00\u59cb\uff0c\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u94f8\u9020WISE\u4ee4\u724c\uff0c\u539f\u56e0\u662f\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "LT\u65f6\u4ee3\u4fdd\u7559\u4e86WISE"), " \u6216\u8005\u62e5\u6709 ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "\u83b7\u5f97\u63a8\u8350\u5956\u91d1WISE")), r.a.createElement("p", null, "\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u524d\u7aef\u754c\u9762\u6309\u6279\u6b21\u5b8c\u6210WISE\u7684\u94f8\u9020\u3002\u8be5\u754c\u9762\u5c06\u663e\u793a\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u591a\u5c11WISE\uff0c\u5e76\u6309\u9884\u8ba2\u548c/\u6216\u63a8\u8350\u5956\u91d1\u6765\u6e90\u7ec6\u5206\u3002\u7528\u6237\u53ef\u4ee5\u7acb\u5373\u94f8\u9020\u4ed6\u4eec\u7684WISE\uff0c\u4e5f\u53ef\u4ee5\u6839\u636e\u9700\u8981\u7b49\u5f85\uff0c\u800c\u4e0d\u4f1a\u53d7\u5230\u4efb\u4f55\u60e9\u7f5a\u3002"), r.a.createElement("p", null, "\u7528\u6237\u53ef\u80fd\u5e0c\u671b\u5c3d\u5feb\u800c\u4e0d\u662f\u7a0d\u540e\u94f8\u9020\u4ed6\u4eec\u7684WISE\uff0c\u4ee5\u4fbf\u5229\u7528 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "\u8d28\u62bc"), "\u4ed6\u4eec\u8d5a\u53d6\u5229\u606f\uff0c\u7b49\u5f85\u7684\u65f6\u95f4\u8d8a\u957f\uff0c\u5229\u6da6\u5c31\u8d8a\u5c11\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-4"
                            }, "2.3.4"), "\xa0\xa0\u4f9b\u5e94\u81a8\u80c0"), r.a.createElement("p", null, "WISE\u7684\u603b\u5faa\u73af\u4f9b\u5e94\u91cf\u4ee5\u6bcf\u5e744\uff05\u7684\u6052\u5b9a\u901f\u5ea6\u589e\u957f\u3002\u5728\u6d41\u901a\u65f6\u4ee3\u7684\u6bcf\u4e00\u5929\u7ed3\u675f\u65f6\uff0c\u5408\u540c\u90fd\u4f1a\u8ba1\u7b97\u51fa\u8be5\u5929\u9700\u8981\u94f8\u9020\u591a\u5c11\u65b0\u7684WISE\uff0c\u624d\u80fd\u8fbe\u5230\u8be5\u901a\u8d27\u81a8\u80c0\u7387\u3002"), r.a.createElement("pre", null, r.a.createElement("code", null, "totalWiseSupply = circulatingWise + stakedWise", r.a.createElement("br", null), "dailyInflationRate = (1.04 ^ (1 / 365) - 1)", r.a.createElement("br", null), "dailyInflationRate =~ 0.0001074597820279", r.a.createElement("br", null), r.a.createElement("br", null), "newWiseToday = totalWiseSupply \xd7 dailyInflationRate")), r.a.createElement("p", null, "\u8fd9\u4e9b\u65b0\u7684\u6bcf\u65e5\u901a\u80c0WISE\u4e0d\u4f1a\u7acb\u5373\u4ea7\u751f\u3002\u76f8\u53cd\uff0c\u5b83\u4eec\u4e13\u7528\u4e8e\u5206\u53d1\u7ed9\u4e24\u4e2a\u65b9\uff1a\u56db\u5206\u4e4b\u4e09\uff08\u901a\u8d27\u81a8\u80c0\u73873\uff05\uff09\u7ed9\u6240\u6709\u6d3b\u52a8\u65b9 ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "\u80a1\u4efd"), " \u5f53\u5929\u7684 one quarter (1% inflation) to all active, qualified\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "CM\u80a1\u4efd"), " \u6bcf\u4e2a\u6d3b\u8dc3\u7684\u80a1\u4efd\u90fd\u88ab\u6307\u5b9a\u4e3a\u8be5\u65b0WISE\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u4e0e\u8be5\u80a1\u4efd\u5728\u5f53\u5929\u603b\u80a1\u4efd\u4e2d\u6240\u5360\u7684\u767e\u5206\u6bd4\u6210\u6bd4\u4f8b\u3002\u6307\u5b9a\u7ed9\u5408\u683cCM\u80a1\u4efd\u7684WISE\u4f7f\u7528\u76f8\u540c\u7684\u5206\u914d\u65b9\u6848\u3002"), r.a.createElement("p", null, "\u4e00\u4e2a\u793a\u4f8b\u573a\u666f:"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u5047\u8bbe\u5728\u7b2cX\u5929:", r.a.createElement("br", null), "\xa0\xa0100,000,000 \u603b\u6d41\u901aWISE", r.a.createElement("br", null), "\xa0\xa030,000,000 \u603b\u8d28\u62bc WISE", r.a.createElement("br", null), "\xa0\xa010,000,000 \u603b\u4efd\u989d", r.a.createElement("br", null), r.a.createElement("br", null), "\u7136\u540e\uff0c\u5c06\u5728\u8fd9\u4e00\u5929\u751f\u6210\u7684\u65b0WISE\u603b\u6570:", r.a.createElement("br", null), "\xa0\xa0newWiseDayX = (100,000,000 + 30,000,000) \xd7 0.0001074597820279", r.a.createElement("br", null), "\xa0\xa0newWiseDayX = 13,969.771663627 WISE", r.a.createElement("br", null), r.a.createElement("br", null), "\u65b0\u7684WISE\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206:", r.a.createElement("br", null), "\xa0\xa0\u56db\u5206\u4e4b\u4e09\u7684\u80a1\u4efd\uff08\u53733\uff05\u7684\u901a\u8d27\u81a8\u80c0\u7387\uff09", r.a.createElement("br", null), "\xa0\xa0CM\u80a1\u7968\u56db\u5206\u4e4b\u4e00\uff08\u53731\uff05\u7684\u901a\u80c0\u7387\uff09", r.a.createElement("br", null), r.a.createElement("br", null), "\u73b0\u5728\uff0c\u5047\u8bbe\u7528\u6237A\u7684\u6709\u6548\u80a1\u4efd\u4e3a2,000,000\u80a1.", r.a.createElement("br", null), "\u5728\u7b2cX\u5929\uff0c\u6b64\u7528\u6237\u7684\u80a1\u4efd\u5c06\u4e3a\u6b64\u6307\u5b9a\u4e00\u4e9bWISE:", r.a.createElement("br", null), r.a.createElement("br", null), "\xa0\xa0userANewWiseDayX = newWiseDayX \xd7 (3/4) \xd7 stakeShares / totalShares", r.a.createElement("br", null), "\xa0\xa0userANewWiseDayX = 13,969.771663627 \xd7 (3/4) \xd7 2,000,000 / 10,000,000", r.a.createElement("br", null), "\xa0\xa0userANewWiseDayX = 2,095.46574954405 WISE", r.a.createElement("br", null)))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-5"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "2.3.5"), "\xa0\xa0Staking"), r.a.createElement("p", null, "WISE\u5408\u540c\u5141\u8bb8\u7528\u6237\u653e\u6837\u5176WISE\uff0c\u5c06\u5176\u9501\u5b9a\u4e3a\u51e0\u5929\u5185\uff0c\u4ee5\u8d5a\u53d6\u5229\u606f\u3002\u8fd9\u662f\u5408\u540c\u671f\u95f4\u7684\u4e3b\u8981\u529f\u80fd ", r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "\u6d41\u901a\u65f6\u4ee3"), "."), r.a.createElement("p", null, "\u7528\u6237\u53ef\u4ee5\u968f\u610f\u6253\u5f00\u4efb\u610f\u6570\u91cf\u7684\u8d28\u62bc\u3002\u80a1\u4efd\u8fbe\u5230\u5b8c\u5168\u5230\u671f\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u968f\u65f6\u5c06\u5176\u5173\u95ed\u4ee5\u6536\u53d6\u5176\u5168\u90e8\u672c\u91d1\u548c\u5229\u606f\uff0c\u800c\u4e0d\u4f1a\u53d7\u5230\u7f5a\u6b3e\u3002"), r.a.createElement("p", null, "\u4e0e\u5176\u4ed6\u4e00\u4e9b\u53ef\u62b5\u62bc\u4ee3\u5e01\u4e0d\u540c\uff0cWISE\u6c38\u8fdc\u4e0d\u4f1a\u60e9\u7f5a\u6210\u719f\u7684\u80a1\u6743\uff0c\u65e0\u8bba\u6700\u7ec8\u5173\u95ed\u591a\u4e45\u3002\u8fd9\u5141\u8bb8\u7528\u6237\u66f4\u591a\u7075\u6d3b\u6027\uff0c\u7279\u522b\u662f\u7528\u4e8e\u5e94\u7a0e\u6536\u5165\u7684\u76ee\u7684\u3002\u6b64\u5916\uff0c\u5982\u679c\u7528\u6237\u5728\u80fd\u591f\u53ca\u65f6\u5173\u95ed\u80a1\u4efd\u4e4b\u524d\u5c31\u5df2\u7ecf\u53bb\u4e16\uff0c\u90a3\u4e48WISE\u5408\u540c\u5c06\u4ecd\u7136\u9075\u5b88\u5404\u4e2a\u53f8\u6cd5\u7ba1\u8f96\u533a\u7684\u623f\u5730\u4ea7\u6cd5\uff0c\u8fd9\u5c06\u4f7f\u5bf9\u6b7b\u8005\u8d22\u4ea7\u7684\u5904\u7f5a\u6210\u4e3a\u975e\u6cd5\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-1"
                            }, "2.3.5.1"), "\xa0\xa0Opening Stakes"), r.a.createElement("p", null, "\u5f53\u7528\u6237\u6253\u5f00\u65b0\u8d28\u62bc\u65f6\uff0c\u4ed6\u4eec\u9009\u62e9\u8981\u6295\u653e\u7684WISE\u6570\u91cf\u4ee5\u53ca\u4ee5\u5929\u4e3a\u5355\u4f4d\u7684\u8d28\u62bc\u957f\u3002 \u6700\u4f4e\u4fdd\u8bc1\u91d1\u4e3a0.000000000001 WISE\uff081000000 YODA\uff09\u3002 \u6700\u5c0f\u5141\u8bb8\u8d28\u62bc\u65f6\u95f4\u4e3a1\u5929\uff0c \u6700\u5927\u5141\u8bb8\u8d28\u62bc\u65f6\u95f4\u4e3a15330\u5929\uff0842\u5e74\uff09\u3002"), r.a.createElement("p", null, "\u8d28\u62bc\u4e00\u65e6\u6253\u5f00\uff0c\u4fbf\u5904\u4e8e\u201c\u5f85\u5b9a\u201d\u72b6\u6001\u3002\u8fd9\u610f\u5473\u7740\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u76f4\u5230\u7b2c\u4e8c\u5929\u624d\u5f00\u59cb\u62b5\u62bc\u3002\u7528\u6237\u53ef\u4ee5\u5173\u95ed\u5904\u4e8e\u5f85\u5904\u7406\u72b6\u6001\u7684\u80a1\u4efd\uff0c\u6536\u56de\u80a1\u4efd\u672c\u91d1\uff0c\u800c\u4e0d\u4f1a\u53d7\u5230\u7f5a\u6b3e\u6216\u5229\u606f\u3002"), r.a.createElement("p", null, "\u7b2c\u4e8c\u5929\u5f00\u59cb\u65f6\uff0c\u5f85\u5904\u7406\u7684\u8d4c\u6ce8\u5c06\u53d8\u4e3a\u201c\u6d3b\u52a8\u201d\u72b6\u6001\u3002\u6b64\u65f6\uff0c\u5728\u8fbe\u5230\u201c\u6210\u719f\u201d\u72b6\u6001\u4e4b\u524d\u5173\u95ed\u80a1\u4efd\u5c06\u4ea7\u751f\u7f5a\u6b3e\u3002"), r.a.createElement("p", null, "\u5f00\u7acb\u8d28\u62bc\u540e\uff0c\u6ce8\u8d44\u7684WISE\u4ee3\u5e01\u5b9e\u9645\u4e0a\u4f1a\u88ab\u5408\u540c\u70e7\u6bc1\u5e76\u8f6c\u6362\u4e3ainto\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "\u201c\u80a1\u4efd\u201d"), ".  \u8fd9\u4e9b\u80a1\u4efd\u5728\u80a1\u4efd\u5b58\u7eed\u671f\u5185\u4e00\u76f4\u5b58\u5728\u3002\u80a1\u4efd\u5e73\u4ed3\u540e\uff0c\u80a1\u4efd\u5c06\u88ab\u9500\u6bc1\uff0cWISE\u5c06\u88ab\u94f8\u9020\u56de\u7528\u6237\uff08\u4ee5\u53ca\u589e\u52a0\u7684\u5229\u606f\u548c\u6263\u9664\u7684\u7f5a\u6b3e\uff09\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "2.3.5.2"), "\xa0\xa0\u8d28\u62bc\u53ca\u5229\u606f"), r.a.createElement("p", null, "\u5f00\u7acb\u8d28\u62bc\u540e\uff0c\u5176WISE\u672c\u91d1\u5c06\u88ab\u71c3\u70e7\u5e76\u8f6c\u6362\u4e3a\u8d28\u62bc\uff0c\u8fd9\u4e9b\u8d28\u62bc\u4ee3\u8868\u8d28\u62bc\u7684\u5927\u5c0f\u548c\u957f\u5ea6\uff0c\u4ee5\u53ca\u95f4\u63a5\u8868\u793a\u8d28\u62bc\u7684\u5f00\u7acb\u65f6\u95f4\u3002\u65b0\u5f00\u7acb\u7684\u8d28\u62bc\u83b7\u5f97\u7684\u8d28\u62bc\u6570\u91cf\u53d6\u51b3\u4e8eWISE\u5408\u540c\u4e2d\u8ddf\u8e2a\u7684\u5168\u7403\u201c\u8d28\u62bc\u201d\u4ee5\u53ca\u57fa\u4e8e\u8d28\u62bc\u957f\u5ea6\u7684\u767e\u5206\u6bd4\u5956\u52b1\u3002\u8be5\u8d28\u62bc\u53ea\u4f1a\u4e0a\u6da8\uff0c\u56e0\u6b64\u65e9\u76d8\u597d\u4e8e\u665a\u76d8\u3002"), r.a.createElement("p", null, "\u6bcf\u65e5\u901a\u8fc7WISE\u4f9b\u5e94\u81a8\u80c0\u4ee5\u53ca\u5176\u4ed6\u6536\u76ca\u6765\u8d5a\u53d6\u5229\u606f ", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "\u7f5a\u6b3e"), " paid.", r.a.createElement("a", {
                                href: "/docs#sec-2-3-4"
                            }, "WISE\u4f9b\u5e94\u81a8\u80c0"), " \u6bcf\u5e74\u7ea64\uff05\u3002\u8be5\u901a\u8d27\u81a8\u80c0\u7684\u56db\u5206\u4e4b\u4e09\uff08\u53733\uff05\u7684\u5e74\u5229\u7387\uff09\u6bcf\u5929\u5206\u914d\u7ed9\u6240\u6709\u5728\u804c\u80a1\u7968\uff0c\u5e76\u6309\u5176\u5728\u603b\u80a1\u672c\u4e2d\u6240\u5360\u7684\u6bd4\u4f8b\u5206\u914d\u3002\u5269\u4f59\u7684\u56db\u5206\u4e4b\u4e00\uff08\u53731\uff05\u7684\u5e74\u5229\u7387\uff09\u6bcf\u5929\u5206\u914d\u7ed9", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "CM\u63a8\u8350\u4eba\u4efd\u989d"), " \u4ee5\u540c\u6837\u7684\u6bd4\u4f8b\u65b9\u5f0f\u3002"), r.a.createElement("p", null, "\u6839\u636e\u6240\u6301\u8d28\u62bc\u7684\u957f\u5ea6\uff0c\u5c06\u5728\u7531WISE\u7684\u6240\u6301\u8d28\u62bc\u6570\u91cf\u548c\u5f53\u524d\u8d28\u62bc\u786e\u5b9a\u7684\u6570\u91cf\u4e4b\u4e0a\u4ea7\u751f\u8d28\u62bc\u6570\u91cf\u3002\u5956\u91d1\u4ece\u4e00\u5929\u8d28\u62bc\u76840\uff05\u7565\u9ad8\u4e8e0\uff05\u52305\u5e74\u4ee5\u4e0a\u8d28\u62bc\u768425\uff05\u7ebf\u6027\u589e\u957f\u3002\u4f8b\u5982\uff0c\u5c06\u4ea7\u751f1.5\u5e74\u7684\u8d28\u62bc", r.a.createElement("code", null, "1.5 * 5% = 7.5%"), " \u7ea2\u5229\u5206\u4eab."), r.a.createElement("p", null, "\u8d28\u62bc\u59cb\u4e8e\u4ee5", r.a.createElement("code", null, "\u8d28\u62bc\u6536\u76ca\u6536\u76ca"), ". \u6bcf\u5f53\u7ed3\u6e05\u4efb\u4f55\u8d28\u62bc\u65f6\uff0c\u5408\u540c\u90fd\u4f1a\u8ba1\u7b97\u8be5\u8d28\u62bc\u7684\u603b\u56de\u62a5\uff08\u672c\u91d1+\u5229\u606f-\u7f5a\u6b3e\uff09\u4e0e\u5176\u8d28\u62bc\u7684\u6bd4\u7387\u3002\u5982\u679c\u8be5\u6bd4\u7387\u5927\u4e8e\u5f53\u524d\u8d28\u62bc\uff0c\u5219\u8d28\u62bc\u5c06\u7acb\u5373\u8bbe\u7f6e\u4e3a\u8be5\u65b0\u7684\u589e\u52a0\u7684\u4ef7\u503c\u3002"), r.a.createElement("p", null, "\u8d28\u62bc\u53ea\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u6d41\u901d\u800c\u589e\u52a0\uff0c\u5c3d\u7ba1\u76f8\u5f53\u7f13\u6162\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u65e9\u5148\u7684\u8d28\u62bc\u6bd4\u76f8\u540c\u6570\u91cf\u7684WISE\u7684\u4ee5\u540e\u7684\u8d28\u62bc\u83b7\u5f97\u66f4\u591a\u7684\u8d28\u62bc\u3002\u8fd9\u8d28\u62bc\u4e0a\u6da8\u673a\u5236\u8fd8\u963b\u6b62\u7528\u6237\u5c06\u81ea\u5df1\u7684\u5174\u8da3\u4e0e\u4e00\u7cfb\u5217\u8f83\u5c0f\u7684\u8d28\u62bc\u76f8\u52a0\uff0c\u4ee5\u8bd5\u56fe\u80dc\u8fc7\u76f8\u540c\u89c4\u6a21\u7684\u5355\u4e2a\u591a\u5934\u8d28\u62bc\u3002"), r.a.createElement("p", null, "\u7b2c\u5341\u4e94\u5929\u5f00\u59cb ", r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "\u6d41\u901a\u65f6\u4ee3"), ", \u4e00\u6b21\u6027\u7684\u80a1\u4ef7\u5c06\u81ea\u52a8\u4e0a\u6da810\uff05\u3002 \u8fd9\u6781\u5927\u5730\u523a\u6fc0\u4e86\u7528\u6237\u5728\u53d1\u884c\u7eaa\u5143\u7684\u7b2c\u524d\u4e24\u5468\u5f00\u7acb\u80a1\u4efd\u3002 \u7b49\u5230\u7b2c\u5341\u4e94\u5929\u5f00\u7acb\u80a1\u4efd\uff0c\u60a8\u5c06\u83b7\u5f97\u4e0e\u524d\u4e00\u5929\u76f8\u540c\u6570\u91cf\u7684WISE\u80a1\u4efd\uff0c\u6bd4\u524d\u4e00\u5929\u51cf\u5c11\u7ea69\uff05\u7684\u80a1\u4efd\u3002 \u53cd\u8fc7\u6765\uff0c\u8fd9\u610f\u5473\u7740\u80a1\u4efd\u6240\u8d5a\u53d6\u7684\u5229\u606f\u5927\u7ea6\u51cf\u5c11\u4e869\uff05\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-3"
                            }, "2.3.5.3"), "\xa0\xa0\u5e9f\u9664\u8d28\u62bc\u7684\u5229\u606f"), r.a.createElement("p", null, "\u7528\u6237\u5c06\u80fd\u591f\u4ece\u6d3b\u8dc3\u7684\u80a1\u4efd\u4e2d\u63d0\u53d6\uff08\u53d6\u6d88\uff09\u4efb\u4f55\u8d5a\u53d6\u7684\u5229\u606f\uff08\u5373\u5728\u80a1\u4efd\u5b8c\u5168\u5230\u671f\u4e4b\u524d\uff09"), r.a.createElement("p", null, "\u7528\u6237\u53ef\u4ee5\u51c6\u786e\u9009\u62e9\u5e0c\u671b\u522e\u53d6\u7684\u5229\u606f\uff0c\u6700\u9ad8\u53ef\u4ee5\u662f\u6700\u5927\u5229\u606f\uff08\u4ece\u524d\u51e0\u5929\u5f00\u59cb\u7d2f\u79ef\u7684\u6240\u6709\u672a\u522e\u9664\u7684\u5229\u606f\uff09\u3002\u53ef\u4ee5\u4ece\u6709\u6548\u80a1\u4efd\u4e2d\u5212\u6389\u6743\u76ca\u5728\u6574\u4e2a\u80a1\u4efd\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u591a\u6b21\u3002"), r.a.createElement("p", null, "\u4ece\u6709\u6548\u80a1\u4efd\u7684\u7b2c\u4e8c\u5929\u5f00\u59cb\u5c31\u6709\u53ef\u80fd\u4ea7\u751f\u522e\u64e6\u5229\u606f\u3002 \u5728\u7b2c1\u5929\uff08\u7b2c\u4e00\u4e2a\u6d3b\u52a8\u65e5\uff09\uff0c\u80a1\u4efd\u5c1a\u672a\u5b8c\u6210\u4e00\u6574\u5929\u7684\u6d3b\u52a8\uff0c\u56e0\u6b64\u5c1a\u672a\u4ea7\u751f\u4efb\u4f55\u5229\u606f\u3002"), r.a.createElement("p", null, "\u5f53\u5e73\u4ed3\u80a1\u4efd\u65f6\uff0c\u65e0\u8bba\u662f\u201c\u6d3b\u8dc3\u201d\u8fd8\u662f\u201c\u6210\u719f\u201d\uff0c\u56de\u9988\u7ed9\u7528\u6237\u7684\u5229\u606f\u4ec5\u5305\u62ec\u5c1a\u672a\u6e05\u9664\u7684\u5229\u606f\u3002"), r.a.createElement("p", null, "\u524a\u51cf\u5229\u606f\u4e0d\u4f1a\u5f71\u54cd\u80a1\u6743\u7684\u672c\u91d1\uff0c\u4f46\u4f1a\u51cf\u5c11\u80a1\u6743\u7684\u6570\u91cf\u3002 \u8fd9\u5b9e\u9645\u4e0a\u610f\u5473\u7740\uff0c\u8be5\u80a1\u4efd\u5728\u5f53\u524d\u548c\u6240\u6709\u5c06\u6765\u7684\u65e5\u5b50\u4e2d\u6240\u8d5a\u53d6\u7684\u5229\u606f\u5c06\u6bd4\u5176\u4ed6\u60c5\u51b5\u5c11\u4e00\u4e9b\u3002 \u5982\u679c\u7528\u6237\u9009\u62e9\u7acb\u5373\u91cd\u65b0\u83b7\u5f97\u81ea\u5df1\u7684\u62a5\u5e9f\u6743\u76ca\uff0c\u8fd9\u79cd\u4efd\u989d\u51cf\u5c11\u8fd8\u53ef\u4ee5\u9632\u6b62\u7528\u6237\u83b7\u5f97\u66f4\u591a\u7684\u603b\u4f53\u4efd\u989d\u3002"), r.a.createElement("p", null, "\u8d28\u62bc\u5229\u606f\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-2"
                            }, "\u4efd\u989d"), " \u589e\u52a0, \u76f8\u5f53\xa0", r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "\u5e73\u4ed3"), ". \u4e3a\u4e86\u8fdb\u884c\u8fd9\u4e9b\u8ba1\u7b97\uff0c\u5229\u76ca\u6538\u5173\u65b9\u51c6\u786e\u5730\u8ddf\u8e2a\u7528\u6237\u5728\u80a1\u6743\u4ea4\u6613\u8fc7\u7a0b\u4e2d\u7d2f\u79ef\u4e86\u591a\u5c11\u7d2f\u79ef\u7684\u5229\u606f\u3002 \u786e\u5b9a\u53ef\u80fd\u7684\u80a1\u4ef7\u4e0a\u6da8\u548c\u80a1\u4efd\u6570\u91cf\u51cf\u5c11\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"), r.a.createElement("p", null, "\u9996\u5148\uff0c\u6839\u636e\u8d28\u62bc\u7684\u5047\u6536\u76ca\uff08\u672c\u91d1\u52a0\u4e0a\u5230\u76ee\u524d\u4e3a\u6b62\u7684\u6240\u6709\u62a5\u5e9f\u5229\u606f\uff0c\u5305\u62ec\u8fd9\u6b21\u62a5\u5e9f\uff09\u9664\u4ee5\u8d28\u62bc\u7684\u521d\u59cb\u80a1\u4efd\uff0c\u8ba1\u7b97\u53ef\u80fd\u7684\u65b0\u80a1\u4ef7\uff1a"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u65b0\u7684\u4efd\u989d\u4ef7\u683c = (\u8d28\u62bc\u672c\u91d1 + \u7d2f\u8ba1\u79fb\u9664\u5229\u606f) / \u8d28\u62bc\u521d\u59cb\u4efd\u989d")), r.a.createElement("p", null, "\u63a5\u4e0b\u6765\uff0c\u5982\u679c\u6b64\u65b0\u80a1\u4ef7\u5927\u4e8e\u5f53\u524d\u7684\u5168\u7403\u80a1\u4ef7\uff0c\u5219\u66f4\u65b0\u5168\u7403\u80a1\u4ef7\uff08\u7531\u4e8e\u8fd9\u79cd\u522e\u64e6\u800c\u53ef\u80fd\u521a\u521a\u589e\u52a0\uff09\uff1a"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u5982\u679c(\u65b0\u7684\u4efd\u989d\u4ef7\u683c > \u5168\u4efd\u989d\u4ef7\u683c) \u5168\u4efd\u989d\u4ef7\u683c = \u65b0\u7684\u4efd\u989d\u4ef7\u683c")), r.a.createElement("p", null, "\u63a5\u4e0b\u6765\uff0c\u6839\u636e\u73b0\u5728\u8981\u6e05\u9664\u7684\u5229\u606f\u548c\u5168\u7403\u80a1\u4ef7\uff0c\u8ba1\u7b97\u8981\u4ece\u80a1\u4efd\u4e2d\u5220\u9664\u7684\u80a1\u4efd\u6570\u91cf\uff1a"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u79fb\u9664\u8d28\u62bc\u4efd\u989d = \u79fb\u9664\u7684\u5229\u606f / \u5168\u8d28\u62bc\u4ef7\u683c")), r.a.createElement("p", null, "\u79fb\u9664\u5f53\u524d\u8d28\u62bc:"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u5f53\u524d\u8d28\u62bc\u4efd\u989d = \u8d28\u62bc\u4efd\u989d - \u79fb\u9664\u8d28\u62bc\u4efd\u989d"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-4"
                            }, "2.3.5.4"), "\xa0\xa0\u5173\u95ed\u8d28\u62bc"), r.a.createElement("p", null, "\u7528\u6237\u53ef\u4ee5\u968f\u65f6\u5173\u95ed\u80a1\u4efd\u3002 \u6839\u636e\u6869\u7684\u72b6\u6001\uff08\u6869\u5728\u751f\u547d\u5468\u671f\u4e2d\u7684\u4f4d\u7f6e\uff09\uff0c\u4f1a\u53d1\u751f\u4e0d\u540c\u7684\u4e8b\u60c5\uff1a"), r.a.createElement("ul", null, r.a.createElement("li", null, "\u5173\u95ed ", r.a.createElement("strong", null, "\u51c6\u5907"), " \u8d28\u62bc - \u8d28\u62bc\u88ab\u9500\u6bc1\u3002 \u6574\u4e2a\u8d28\u62bc\u672c\u91d1\u88ab\u94f8\u9020\u56de\u7528\u6237\uff0c\u6ca1\u6709\u5229\u606f\u6216\u7f5a\u6b3e\u3002"), r.a.createElement("li", null, "\u5173\u95ed ", r.a.createElement("strong", null, "\u6b63\u6d3b\u8dc3"), " \uff08\u672a\u6210\u719f\u8d28\u62bc\uff09\u8d28\u62bc-\u8d28\u62bc\u88ab\u9500\u6bc1\u3002 \u8d28\u62bc\u672c\u91d1\u5c06\u53d7\u5230\u5904\u7f5a\uff08\u89c1\u4e0b\u6587\uff09\uff0c\u5e76\u4e0e\u5230\u76ee\u524d\u4e3a\u6b62\u7d2f\u79ef\u7684\u6240\u6709\u5229\u606f\u4e00\u8d77\u56de\u94f8\u7ed9\u7528\u6237\u3002"), r.a.createElement("li", null, "\u5173\u95ed ", r.a.createElement("strong", null, "\u5230\u671f\u7684"), " \u8d28\u62bc - \u8d28\u62bc\u88ab\u9500\u6bc1\u3002 \u6574\u4e2a\u8d28\u62bc\u672c\u91d1\u548c\u6240\u6709\u7d2f\u79ef\u7684\u5229\u606f\u88ab\u94f8\u9020\u56de\u7528\u6237\u3002 \u4e0d\u8bba\u6210\u719f\u591a\u4e45\uff0c\u5173\u95ed\u6210\u719f\u80a1\u4efd\u90fd\u4e0d\u4f1a\u53d7\u5230\u4efb\u4f55\u5904\u7f5a\u3002")), r.a.createElement("p", null, "\u5728\u5e73\u4ed3\u6709\u6548\u80a1\u4efd\u65f6\u4ece\u672c\u91d1\uff08\u8d28\u62bcWise\uff09\u4e2d\u6263\u9664\u7684\u7f5a\u6b3e\u5982\u4e0b\uff1a"), r.a.createElement("pre", null, r.a.createElement("code", null, "\u5982\u679c\u8d28\u62bc\u4e3a\u5176\u4e00\u5929:", r.a.createElement("br", null), "\xa0\xa0\u60e9\u7f5a\u91d1\u989d=\u8d4c\u6ce8\u660e\u667a\xd70.1", r.a.createElement("br", null), r.a.createElement("br", null), "\u5982\u679c\u8d28\u62bc\u4e3a\u4e24\u5929\u6216\u66f4\u957f\u65f6\u95f4:", r.a.createElement("br", null), "\xa0\xa0\u60e9\u7f5a\u91d1\u989d=\u8d4c\u6ce8\u660e\u667a\xd7\uff08.1 + .8\xd7\uff08\uff08\u5929\u6570-1\uff09/\uff08\u8d28\u62bc\u5929\u6570-1\uff09\uff09\uff09")), r.a.createElement("p", null, "\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u5728\u5230\u671f\u65e5\u7684\u6700\u540e\u4e00\u5929\u5173\u95ed\u4e86100\u5929\u957f\u7684\u6709\u6548\u80a1\u6743\uff0c\u5219\u5c06\u5bf9\u672c\u91d1\u65bd\u52a010\uff05\u7684\u7f5a\u6b3e\u3002 \u5982\u679c\u60a8\u5728\u4ea4\u6613\u7684\u7b2c\u4e00\u5929\u5c31\u5173\u95ed\u4e86\u76f8\u540c\u7684\u80a1\u4efd\uff0c\u60a8\u5c06\u53d7\u523090\uff05\u7684\u7f5a\u6b3e\u3002 \u60e9\u7f5a\u5728\u8fd9\u4e24\u4e2a\u6781\u7aef\u4e4b\u95f4\u7ebf\u6027\u7f29\u653e\u3002"), r.a.createElement("p", null, "\u4efb\u4f55\u4ece\u80a1\u4efd\u56de\u62a5\u4e2d\u53d7\u5230\u60e9\u7f5a\u7684WISE\u90fd\u5c06\u88ab\u6307\u5b9a\u7528\u4e8e\u5f53\u5929\u5206\u914d\u7ed9\u6240\u6709\u6d3b\u8dc3\u80a1\u4efd\u3002 \u4ec5\u5f53\u8fd9\u4e9b\u80a1\u4efd\u4e2d\u7684\u6bcf\u4e00\u4e2a\u7ed3\u675f\u65f6\uff0c\u8fd9\u4e9b\u7f5a\u6b3e\u5206\u914d\u624d\u7531\u8fd9\u4e9b\u80a1\u4efd\u7684\u4efd\u989d\u5b9e\u73b0\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-2-3-5-5"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5-5"
                            }, "2.3.5.5"), "\xa0\xa0\u8d28\u62bc\u9080\u8bf7\u4eba"), r.a.createElement("p", null, "\u6b63\u5982WISE\u5408\u540c\u4e2d\u5305\u542b\u63a8\u8350\u8ba1\u5212\u4e00\u6837\uff0c\u8be5\u8ba1\u5212\u65e8\u5728\u6fc0\u52b1\u7528\u6237\u4ee5\u5e2e\u52a9\u5c06\u66f4\u591aETH\u7eb3\u5165 ", r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "\u6d41\u52a8\u6027\u53d8\u538b\u5668"), ", \u5b83\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4e0b\u6ce8\u7684\u63a8\u8350\u7a0b\u5e8f\u3002"), r.a.createElement("p", null, "\u5f53\u7528\u6237\u6253\u5f00\u65b0\u7684\u80a1\u4efd\u65f6\uff0c\u524d\u7aef\u754c\u9762\u4f1a\u68c0\u67e5\u6d4f\u89c8\u5668\u662f\u5426\u5177\u6709\u5f15\u8350Cookie\uff0c\u5c31\u50cf\u5236\u4f5c\u5f15\u8350Cookie\u4e00\u6837\u3002 ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-1"
                            }, "\u4ee3\u5e01\u9884\u7559"), " \u5728LT\u65f6\u4ee3\u3002 \u5982\u679c\u5b58\u5728\u8fd9\u6837\u7684cookie\uff0c\u5e76\u4e14\u65b0\u80a1\u4efd\u81f3\u5c11\u6709365\u5929\uff0c\u5219\u5408\u540c\u4f1a\u7528\u63a8\u8350\u4eba\u7684\u5730\u5740\u6807\u8bb0\u8be5\u65b0\u80a1\u4efd\u3002"), r.a.createElement("p", null, "\u63a8\u8350\u7684\u80a1\u4efd\u53ef\u4ee5\u4e3a\u6301\u80a1\u4eba\u5e26\u676510\uff05\u7684\u989d\u5916\u80a1\u4efd\uff08\u8d85\u51fa\u4e86\u4e0d\u88ab\u63a8\u8350\u7684\u4efd\u989d\uff09\uff0c\u4ee5\u53ca\u4e3a\u63a8\u8350\u4eba\u63d0\u4f9b\u7b49\u91cf\uff08\u4f46\u6ca1\u670910\uff05\u7684\u7ea2\u5229\uff09\u7684\u201c\u5173\u952e\u5927\u4f17\u80a1\u4efd\u201d\uff08aka\u201c CM\u80a1\u4efd\u201d\uff09 \u3002 \u7cfb\u7edf\u8303\u56f4\u7684CM\u4efd\u989d\u4e13\u7528\u4e8e\u6bcf\u65e5\u901a\u8d27\u81a8\u80c0WISE\u7684\u56db\u5206\u4e4b\u4e00\uff0c\u4f46\u4ec5\u9002\u7528\u4e8e\u5177\u6709CM\u63a8\u8350\u4eba\u8d44\u683c\u7684\u63a8\u8350\u4eba\u3002"), r.a.createElement("p", null, "\u8981\u83b7\u5f97\u6210\u4e3aCM\u63a8\u8350\u4eba\u7684\u8d44\u683c\uff0c\u7528\u6237\u5fc5\u987b\u5728\u4efb\u4f55\u4e00\u5929\u8fbe\u5230365\u5929\u4ee5\u4e0a\u7684\u5f53\u524d\u6d3b\u8dc3\u63a8\u8350\u80a1\u4efd\u7684\u603b\u4ef7\u503c\u4e3a10,000\u7f8e\u5143\u3002 \u5982\u679c\u7528\u6237\u6ee1\u8db3\u6b64\u6761\u4ef6\uff0c\u5219\u4ed6\u4eec\u5c06\u7acb\u5373\u88ab\u6c38\u4e45\u6807\u8bb0\u4e3aCM\u63a8\u8350\u4eba\uff0c\u5e76\u4e14\u6c38\u8fdc\u4e0d\u4f1a\u5931\u53bb\u8fd9\u79cd\u533a\u522b\uff0c\u65e0\u8bba\u5176\u63a8\u8350\u4eba\u662f\u5426\u5173\u95ed\u6240\u6709\u8d4c\u6ce8\u3002"), r.a.createElement("p", null, "\u62e5\u6709CM\u63a8\u8350\u4eba\u8d44\u683c\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\uff0c\u5728\u63a8\u8350\u4eba\u4e2d\u5f15\u752850 ETH\u7684\u4ee4\u724c\u9884\u7559 ", r.a.createElement("a", {
                                href: "/docs#sec-2-2-3-1"
                            }, "LT\u65f6\u4ee3\u7684\u63a8\u8350\u7cfb\u7edf"), ". \u8fbe\u5230\u8be5\u7ea7\u522b\u7684\u7528\u6237\u5c06\u81ea\u52a8\u6c38\u4e45\u83b7\u5f97CM\u63a8\u8350\u4eba\u7684\u8d44\u683c\u3002"), r.a.createElement("p", null, "\u5f00\u7acb\u80a1\u4efd\u540e\uff0c\u4ec5\u8ba1\u7b97\u4e00\u6b21\u65b0\u80a1\u4efd\u7684\u7f8e\u5143\u4ef7\u503c\u3002 \u7528\u4e8e\u8ba1\u7b97\u7684WISE / USD\u6c47\u7387\u5c06\u901a\u8fc7\u67e5\u8be2Uniswap WISE / ETH\u548cETH / DAI\u4ea4\u6613\u5bf9\u5408\u7ea6\u7684\u4ef7\u683c\u9884\u4ed8\u6b3e\u63a5\u53e3\u6765\u786e\u5b9a\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h4", {
                                id: "sec-2-3-6"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-3-6"
                            }, "2.3.6"), "\xa0\xa0\u6d41\u52a8\u8d44\u91d1\u63d0\u4f9b\u8005\u62b5\u62bc"), r.a.createElement("p", null, "WISE\u8fd8\u6709\u53e6\u5916\u4e00\u79cd\u7b79\u7801\u65b9\u5f0f\uff0c\u5982\u679c\u6ee1\u8db3\u67d0\u4e9b\u6761\u4ef6\uff0c\u53ef\u4ee5\u5956\u52b1WISE / ETH\u5bf9\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u3002 \u5982\u679cWISE\u5728Uniswap\u4e0a\u7684\u6d41\u52a8\u6027\u767e\u5206\u6bd4\u4f4e\u4e8e20\uff05\uff0c\u5219\u60a8\u53ef\u4ee5\u5c06W\u4ee3\u5e01\u4e0eLP\u4ee3\u5e01\u653e\u5728\u4e00\u8d77\uff0c\u5e76\u5f00\u59cb\u8d5a\u53d6\u5229\u606f\uff08\u9664\u4e86\u5df2\u7ecf\u83b7\u5f97\u7684\u4ea4\u6613\u8d39\u7528\u5916\uff09\u3002"), r.a.createElement("p", null, "\u8fd9\u7b14\u65b0\u8d44\u91d1\u6765\u81ea\u62b5\u62bc\u4eba3\uff05\u7684\u901a\u80c0\uff0c\u56e0\u6b64\uff0c\u62b5\u62bc\u4eba3\uff05\u7684\u901a\u80c0\u7f13\u6162\u4e0b\u964d\uff0c\u6709\u9650\u5408\u4f19\u4eba\u76840\uff05\u7f13\u6162\u4e0a\u5347\u3002 \u4e00\u65e6\u89e6\u53d1\uff0c\u5bf9\u4e8e\u4e00\u5b9a\u6570\u91cf\u7684\u4eba\u6765\u8bf4\uff0c\u8d2d\u4e70\u6709\u9650\u5408\u4f19\u4eba\u5c06\u53d8\u5f97\u6709\u4ef7\u503c\uff0c\u56e0\u4e3a\u73b0\u5728\u6709\u65b0\u7684\u8d44\u91d1\u53ef\u7528\u4e8e\u6709\u9650\u5408\u4f19\u4eba\u8d5a\u53d6\u6bcf\u65e5\u5229\u606f\u3002"), r.a.createElement("p", null, "LP\u80a1\u4efd\u7684\u989d\u5916\u597d\u5904\u662f\u60a8\u53ef\u4ee5\u968f\u65f6\u7ed3\u675f\u80a1\u4efd\u5e76\u6536\u96c6LP\u4ee3\u5e01\u3002 \u5f53Uniswap\u7684\u6d41\u52a8\u8d44\u91d1\u56de\u523030\uff05\u4ee5\u4e0a\u65f6\uff0c\u56de\u62a5\u9010\u6e10\u5f00\u59cb\u51cf\u5c11\u3002 \u56fa\u5b9a\u901a\u80c0\u5c06\u56de\u5347\u81f33\uff05\uff0cLP\u901a\u80c0\u5c06\u56de\u5347\u81f30\uff05\uff0c\u76f4\u5230\u518d\u6b21\u89e6\u53d1\u3002"), r.a.createElement("p", null, "\u8fd9\u662f\u7cfb\u7edf\u4e2d\u7684\u4e00\u79cd\u4fdd\u969c\u63aa\u65bd\uff0c\u5f88\u53ef\u80fd\u6839\u672c\u4e0d\u4f1a\u89e6\u53d1\u597d\u51e0\u5e74\u3002 \u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u968f\u65f6\u9009\u62e9\u81ea\u5df1\u589e\u52a0\u6d41\u52a8\u6027\uff0c\u4ee5\u4ece\u6536\u8d39\u4e2d\u83b7\u5f97\u5927\u7ea66\uff05\u7684\u6295\u8d44\u56de\u62a5\u7387\uff0c\u4f46\u662f\u76f4\u5230\u9700\u8981\u65f6\uff0c\u624d\u89e6\u53d1\u80a1\u7968\u5229\u606f\u7684\u989d\u5916\u6fc0\u52b1\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-2-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-2-4"
                            }, "2.4"), "\xa0\xa0ERC-20 Functionality"), r.a.createElement("p", null, "WISE\u5408\u540c\u5b8c\u5168\u7b26\u5408ERC-20\u4ee3\u5e01\u6807\u51c6\uff0c\u5982 ", r.a.createElement("a", {
                                href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"
                            }, "EIP-20"), ". \u8fd9\u5b9e\u9645\u4e0a\u662f\u4ee3\u5e01\u5408\u7ea6\u5fc5\u987b\u5b9e\u73b0\u7684\u4e00\u7ec4\u529f\u80fd\uff0c\u624d\u80fd\u6210\u4e3aERC-20\u4ee3\u5e01\u3002"), r.a.createElement("p", null, "\u6b64ERC-20\u6807\u51c6\u5408\u89c4\u6027\u610f\u5473\u7740\u5e94\u7528\u7a0b\u5e8f\uff0c\u7f51\u7ad9\uff0c\u4ea4\u6613\u6240\u548c\u667a\u80fd\u5408\u7ea6\u53ef\u4ee5\u975e\u5e38\u8f7b\u677e\u5730\u4e0eWISE\u5408\u7ea6\u96c6\u6210\u6216\u5728WISE\u5408\u7ea6\u4e4b\u4e0a\u6784\u5efa\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("br", null), r.a.createElement("h2", {
                                id: "sec-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-3"
                            }, "3"), "\xa0\xa0WISE\u751f\u6001\u7cfb\u7edf")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h5", {
                                id: "sec-3-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-3-1"
                            }, "3.1"), "\xa0\xa0\u9080\u8bf7\u94fe\u63a5"), r.a.createElement("p", {
                                className: "aside"
                            }, "\u6ce8\u610f\uff1aWISE\u63a8\u8350\u94fe\u63a5\u548ccookie\u7cfb\u7edf\xa0", r.a.createElement("strong", null, "\u5df2\u4e0a\u7ebf!"), " \u60a8\u53ef\u4ee5\u7acb\u5373\u5f00\u59cb\u4f20\u64ad\u60a8\u7684ref\u94fe\u63a5\uff0c\u5e76\u5728\u5408\u540c\u53d1\u5e03\u4e4b\u524d\u5c31\u5efa\u7acb\u53c2\u8003\u7528\u6237\u7fa4\u3002 \u56e0\u6b64\uff0c\u8bf7\u5e2e\u81ea\u5df1\u4e00\u4e2a\u5fd9\uff0c\u5f00\u59cb\u5728\u6240\u6709\u5730\u65b9\u4f20\u64ad\u60a8\u7684ref\u94fe\u63a5\uff01"), r.a.createElement("p", null, "\u683c\u5f0f:", r.a.createElement("code", {
                                className: "select-all"
                            }, "https://wisetoken.net/?w=YOURETHADDRESS")), r.a.createElement("p", null, "\u4f8b\u5b50: ", r.a.createElement("a", {
                                href: "https://wisetoken.net/?w=0x91143a01a6111ac86efBcc92Fc4f86c01c10AE9F"
                            }, "Get 10% Bonus WISE!")), r.a.createElement("p", null, "\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u4f7f\u7528\u5f15\u8350\u94fe\u63a5\u5c06\u7528\u6237\u5b9a\u5411\u5230WISE\u7f51\u7ad9\uff0c\u6b64Teal Paper\uff0c\u5373\u5c06\u53d1\u5e03\u7684\u5b98\u65b9\u5408\u540cWeb\u754c\u9762\u6216\u7f51\u7ad9\u4e0a\u7684\u4efb\u4f55\u5176\u4ed6\u9875\u9762\u3002", r.a.createElement("a", {
                                href: "https://wisetoken.net/"
                            }, "wisetoken.net"), "\xa0 \u57df\u6216\u5b83\u7684\u5b50\u57df\uff0c\u4ee5\u4fbf\u53ef\u80fd\u4ece\u90a3\u4e9b\u7528\u6237\u7684\u5408\u540c\u4e92\u52a8\u4e2d\u83b7\u5f97\u5404\u79cd\u63a8\u8350\u5956\u52b1WISE\u3002"), r.a.createElement("p", null, "\u5f53\u7528\u6237\u5355\u51fb\u8fd9\u6837\u7684\u5f15\u7528\u94fe\u63a5\u65f6\uff0cwisetoken.net\u7f51\u7ad9\u4f1a\u5728\u5176\u6d4f\u89c8\u5668\u4e2d\u5b58\u50a8\u4e00\u4e2acookie\uff0c\u5176\u4e2d\u5305\u542b\u6765\u81ea\u5f15\u7528\u94fe\u63a5\u7684\u5f15\u7528\u8005\u7684eth\u5730\u5740\u3002 \u5982\u679c\u8be5\u7528\u6237\u4ee5\u540e\u5c06ETH\u53d1\u9001\u7ed9LT\u6216\u5f00\u59cb\u81f3\u5c11\u6301\u7eed\u4e00\u5e74\u7684\u62b5\u62bc\uff0c\u5219cookie\u5c06\u4f7f\u5408\u540c\u5c06\u8be5LT\u4fdd\u7559\u6216\u62b5\u62bc\u6807\u8bb0\u4e3a\u8be5\u5f15\u8350\u4eba\u5df2\u8f6c\u4ecb\u3002"), r.a.createElement("p", null, "\u5982\u679c\u7528\u6237\u5df2\u7ecf\u5728\u5176\u6d4f\u89c8\u5668\u4e2d\u62e5\u6709\u5f15\u8350cookie\uff0c\u7136\u540e\u5355\u51fb\u5176\u4ed6\u5f15\u7528\u94fe\u63a5\uff0c\u5219\u8be5cookie\u5c06\u88ab\u7b2c\u4e8c\u4e2a\u5f15\u7528\u94fe\u63a5\u7684\u4ee5\u592a\u574a\u5730\u5740\u8986\u76d6\u3002 \u56e0\u6b64\uff0c\u5f15\u8350\u662f\u201c\u6700\u7ec8\u70b9\u51fb\u83b7\u80dc\u201d\u3002"), r.a.createElement("p", null, "\u5305\u542b\u65e0\u6548\u4ee5\u592a\u574a\u5730\u5740\u7684\u5f15\u8350\u94fe\u63a5\u5c06\u4e0d\u8d77\u4f5c\u7528\uff1b \u7f51\u7ad9\u5c06\u4e0d\u4f1a\u521b\u5efa\uff08\u6216\u8986\u76d6\uff09cookie\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-4"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-4"
                            }, "4"), "\xa0\xa0\u7ed3\u8bba"), r.a.createElement("p", null, "Wise\u57fa\u91d1\u4f1a\u771f\u8bda\u5730\u5e0c\u671b\uff0c\u6211\u4eec\u4e3a\u5e7f\u5927\u6c11\u4f17\u63d0\u4f9b\u4e00\u79cd\u4e0d\u4fe1\u4efb\uff0c\u5206\u6563\u5316\uff0c\u8ba1\u606f\u7684\u624b\u6bb5\u7684\u52aa\u529b\u5c06\u7855\u679c\u7d2f\u7d2f\uff0c\u5e76\u4e14\u6000\u65af\u5c06\u53d6\u5f97\u5de8\u5927\u7684\u6210\u529f\u3002 \u4f46\u662f\uff0c\u5982\u679c\u6ca1\u6709\u5468\u56f4\u793e\u533a\u7684\u5e2e\u52a9\uff0c\u6211\u4eec\u5c31\u65e0\u6cd5\u5b9e\u73b0\u8fd9\u4e9b\u76ee\u6807\u3002"), r.a.createElement("p", null, "WISE\u9879\u76ee\u7684\u5f00\u59cb\u5e76\u4e0d\u662f\u51fa\u4e8e\u8d62\u5229\u7684\u76ee\u7684\uff0c\u800c\u662f\u51fa\u4e8e\u521b\u9020\u5bf9\u4e16\u754c\u6709\u7528\u7684\u4e1c\u897f\u7684\u6e34\u671b\u3002 \u6211\u4eec\u5e0c\u671b\u8be5\u6587\u4ef6\u4f7f\u6211\u4eec\u7684\u613f\u666f\u548c\u610f\u56fe\u660e\u786e\u3002"), r.a.createElement("p", null, "\u6211\u4eec\u6b22\u8fce\u60a8\u63d0\u51fa\u4efb\u4f55\u95ee\u9898\uff0c\u610f\u89c1\u6216\u6279\u8bc4\u3002 \u6211\u4eec\u8fd8\u9700\u8981\u5bf9\u8be5\u9879\u76ee\u7684\u5404\u79cd\u7c7b\u578b\u7684\u8d21\u732e\u8005\u3002"), r.a.createElement("p", null, "\u8bf7\u52a0\u5165\u6211\u4eec\u7684\u5b98\u65b9WISE\u7535\u62a5\u7fa4", r.a.createElement("a", {
                                href: "https://t.me/WiseToken"
                            }, "t.me/WiseToken"), " \u4e0e\u521b\u59cb\u4eba\uff0c\u5f00\u53d1\u4eba\u5458\uff0c\u652f\u6301\u8005\uff0c\u8bc4\u8bba\u5bb6\u548c\u793e\u533a\u5176\u4ed6\u6210\u5458\u8ba8\u8bbaWISE\u9879\u76ee\u3002")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-5"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-5"
                            }, "5"), "\xa0\xa0\u81f4\u8c22"), r.a.createElement("p", null, "Wise\u57fa\u91d1\u4f1a\u8877\u5fc3\u611f\u8c22\u4ee5\u4e0b\u4e00\u76f4\u81f4\u529b\u4e8e\u7ee7\u7eed\u5b9e\u73b0WISE\u548c\u53d6\u5f97\u6210\u529f\u7684\u4eba\u548c\u56e2\u4f53\uff1a"), r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://twitter.com/haydenzadams"
                            }, "Hayden Adams"), " \u53ca", r.a.createElement("a", {
                                href: "https://uniswap.org/"
                            }, "Uniswap\u7684\u5f00\u53d1\u8005")), " \u2014 \u4e3a\u60a8\u5f00\u53d1\u5982\u6b64\u5b8c\u7f8e\u65e0\u7455\u7684\u5f00\u521b\u6027\u7684\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6362\u534f\u8bae\uff0c\u4ee5\u53ca\u5c31\u5982\u4f55\u6700\u597d\u5730\u5c06WISE\u76f4\u63a5\u4e0e\u5176\u96c6\u6210\u63d0\u4f9b\u5b9d\u8d35\u7684\u5efa\u8bae\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://twitter.com/VitalikButerin"
                            }, "Vitalik Buterin"), ",\xa0", r.a.createElement("a", {
                                href: "https://gavwood.com/"
                            }, "Dr. Gavin Wood"), ",\xa0", r.a.createElement("a", {
                                href: "https://github.com/ethereum"
                            }, "et al.")), " \u2014 \u60a8\u5bf9\u4ee5\u592a\u574a\u5e73\u53f0\u7684\u6784\u60f3\uff0c\u6307\u5bfc\u548c\u5f00\u53d1"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://ethereum.org/"
                            }, "\u4ee5\u592a\u574a\u57fa\u91d1\u4f1a")), " \u2014 \u4e3a\u4ee5\u592a\u574a\u751f\u6001\u7cfb\u7edf\u4e2d\u8bb8\u591a\u521d\u671f\u9879\u76ee\u63d0\u4f9b\u6301\u7eed\u7684\u8d22\u653f\u652f\u6301\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "http://provable.xyz/"
                            }, "Provable Things Ltd.")), " \u2014 \u9002\u7528\u4e8e\u60a8\u529f\u80fd\u9f50\u5168\u4e14\u53ef\u8bc1\u660e\u5b89\u5168\u7684\u533a\u5757\u94feoracle\u5408\u540c\u548c\u57fa\u4e8eLedger\u7684\u968f\u673a\u6570\u636e\u6e90\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://openzeppelin.com/"
                            }, "OpenZeppelin")), " \u2014 \u4e3a\u60a8\u5f00\u53d1\u57fa\u672c\u7684Solidity\u667a\u80fd\u5408\u7ea6\u754c\u9762\u548c\u6784\u4ef6\u5757\u3002."), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://www.trufflesuite.com/"
                            }, "Truffle\u533a\u5757\u94fe\u7fa4")), " \u2014 \u4e3aTruffle Suite\u7684\u5f00\u53d1\u548c\u652f\u6301\u63d0\u4f9b\u5e2e\u52a9\uff0c\u8be5\u5957\u4ef6\u5e2e\u52a9\u52a0\u5feb\u5e76\u7b80\u5316\u4e86WISE\u548c\u8bb8\u591a\u5176\u4ed6\u667a\u80fd\u5408\u7ea6\uff0c\u754c\u9762\u53ca\u5176\u6d4b\u8bd5\u7684\u5f00\u53d1\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://t.me/WiseToken"
                            }, "The WISE\u7535\u62a5\u7fa4")), " \u2014 \u5728\u8bbe\u8ba1\u548c\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u65ad\u63d0\u4f9b\u6709\u4ef7\u503c\u7684\u60f3\u6cd5\uff0c\u5efa\u8bbe\u6027\u7684\u6279\u8bc4\uff0c\u8bda\u5b9e\u7684\u53cd\u9988\uff0c\u4fcf\u76ae\u7684\u73a9\u7b11\u548c\u6f2b\u753b\u7684\u6d6e\u96d5\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://www.coinfabrik.com/"
                            }, "CoinFabrik")), " \u2014 \u5e2e\u52a9\u60a8\u5ba1\u6838WISE\u5408\u540cSolidity\u6e90\u4ee3\u7801\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://99designs.com/profiles/OpayaCreative"
                            }, "Opaya Creative")), " \u2014 \u4e3a\u60a8\u7684WISE\u5fbd\u6807\uff0c\u76f8\u5173\u56fe\u50cf\u548c\u54c1\u724c\u6307\u5357\u7684\u6e05\u6670\u8bbe\u8ba1\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://www.upwork.com/"
                            }, "Upwork")), " \u2014 \u4f7f\u6709\u624d\u534e\u7684\u5f00\u53d1\u4eba\u5458\u7684\u641c\u7d22\u51cf\u5c11\u4e86\u641c\u7d22\u91cf\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://coderpad.io/"
                            }, "\u7f16\u7801\u5668")), " \u2014 \u7528\u4e8e\u4f7f\u5f00\u53d1\u4eba\u5458\u7b5b\u9009\u548c\u91c7\u8bbf\u80fd\u591f\u987a\u5229\u8fdb\u884c\uff0c\u5e76\u4ea7\u751f\u65e0\u6cd5\u901a\u8fc7\u7535\u8bdd\u83b7\u5f97\u7684\u8be6\u7ec6\u6280\u672f\u89c1\u89e3\u3002"), r.a.createElement("li", null, r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://99designs.com/"
                            }, "99\u8bbe\u8ba1")), " \u2014 \u7528\u4e8e\u6258\u7ba1\u4e00\u4e2a\u5145\u6ee1\u624d\u534e\u548c\u6e34\u671b\u7684\u8bbe\u8ba1\u5e08\u7684\u5149\u6ed1\u5e73\u53f0\u3002"), r.a.createElement("li", null, "\u767d\u76ae\u4e66\u91c7\u7528\xa0", r.a.createElement("strong", null, r.a.createElement("a", {
                                href: "https://makerdao.com/purple/"
                            }, "DAI\u7a33\u5b9a\u4ee3\u5e01\u767d\u76ae\u4e66\u7684\u98ce\u683c"))))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-6"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-6"
                            }, "6"), "\xa0\xa0Availability"), r.a.createElement("p", null, "\u672c\u6587\u7684\u7f51\u7edc\u7248\u672c\u6258\u7ba1\u5728 ", r.a.createElement("a", {
                                href: "/teal"
                            }, "https://wisetoken.net/teal/"), ". \u5176\u6e90\u4ee3\u7801\u4fdd\u6301\u5728 ", r.a.createElement("a", {
                                href: "https://github.com/wise-foundation/wise-website/tree/master/html/teal"
                            }, "https://github.com/wise-foundation/wise-website/tree/master/html/teal"), ".")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                id: "sec-7"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7"
                            }, "7"), "\xa0\xa0\u9644\u5f55")), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-7-1"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7-1"
                            }, "\u9644\u5f55A"), "\xa0\xa0\u672f\u8bed"), r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("strong", null, "WISE"), " \u2014 \u672c\u6587\u6240\u8ff0\u7684\u4ee3\u5e01\u548c\u5408\u540c\u3002."), r.a.createElement("li", null, r.a.createElement("strong", null, "YODA"), " \u2014 WISE\u4ee3\u5e01\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u7c7b\u4f3c\u4e8eETH\u7684wei\u6216BTC\u7684satoshi\u3002 \u4e00WISE\u7b49\u4e8e\u4e00\u767e\u4e07\u4ebfYODA\uff081,000,000,000,000,000,000\uff09\u3002"), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-3-5"
                            }, "Stake"), " \u2014 WISE\u7684\u5b9a\u671f\u5b58\u6b3e\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u4f1a\u8d5a\u53d6\u5229\u606f\u3002"), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-2"
                            }, "\u6d41\u52a8\u6027\u53d8\u538b\u5668"), " \u2014 \u5408\u540c\u5b58\u5728\u7684\u5934\u4e94\u5341\u5929\uff0c\u5728\u6b64\u671f\u95f4\uff0c\u7528\u6237\u53ef\u4ee5\u5b58\u5165\u4ee5\u592a\u574a\u4ee5\u4fdd\u7559WISE\u521d\u59cb\u4f9b\u5e94\u7684\u4e00\u90e8\u5206\u3002"), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-3"
                            }, "\u5faa\u73af\u7eaa\u5143"), " \u2014 LT\u7eaa\u5143\u7ed3\u675f\u4e4b\u540e\u7684\u7eaa\u5143\uff0c\u5728\u6b64\u671f\u95f4\uff0c\u7528\u6237\u53ef\u4ee5\u94f8\u9020\u4ed6\u4eec\u5728LT\u7eaa\u5143\u4e2d\u4fdd\u7559\u7684\u4ee3\u5e01\uff0c\u8f6c\u79fb\u4ee3\u5e01\uff0c\u62b5\u62bc\u4ee3\u5e01\u7b49\u3002"), r.a.createElement("li", null, r.a.createElement("a", {
                                href: "/docs#sec-2-3-1"
                            }, "Uniswap"), " \u2014 \u4ee5\u592a\u574a\u533a\u5757\u94fe\u4e0a\u7684\u53bb\u4e2d\u5fc3\u5316\u975e\u6258\u7ba1\u6027ERC-20\u4ee4\u724c\u548cETH\u4ea4\u6613\u6240\u3002 WISE\u5408\u540c\u76f4\u63a5\u4e0eUniswap\u96c6\u6210\u3002 \u5173\u4e8eUniswap\u7684\u4e00\u822c\u4fe1\u606f\u662f ", r.a.createElement("a", {
                                href: "https://uniswap.org/"
                            }, "\u6b64\u5904"), ", Uniswap\u7684\u4ea4\u6613\u94fe\u63a5\u4e3a ", r.a.createElement("a", {
                                href: "https://uniswap.info/"
                            }, "\u6b64\u5904"), ", \u4e3b\u8981\u4ea4\u6613\u94fe\u63a5\u4e3a ", r.a.createElement("a", {
                                href: "https://app.uniswap.org/"
                            }, "\u6b64\u5904"), "."), r.a.createElement("li", null, r.a.createElement("strong", null, "ERC-20"), " \u2014 \u4ee5\u592a\u574a\u667a\u80fd\u5408\u7ea6\u4ee4\u724c\u7684\u6807\u51c6\u63a5\u53e3\u3002 ERC\u4ee3\u8868\u201c\u4ee5\u592a\u574a\u5f81\u6c42\u610f\u89c1\u201d\u3002 \u53ef\u4ee5\u627e\u5230\u63cf\u8ff0ERC-20\u4ee3\u5e01\u7684\u539f\u59cbEIP\uff08\u4ee5\u592a\u574a\u6539\u8fdb\u63d0\u6848\uff09 ", r.a.createElement("a", {
                                href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"
                            }, "\u8fd9\u91cc"), "."))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-7-2"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7-2"
                            }, "\u9644\u5f55B"), "\xa0\xa0\u7f16\u7801\u6807\u51c6"), r.a.createElement("ul", null, r.a.createElement("li", null, "WISE\u5408\u540c\u5b8c\u5168\u4ee5Solidity\u7f16\u5199\uff0c\u5e76\u4f7f\u7528solc 0.7.2\u8fdb\u884c\u7f16\u8bd1\u3002"), r.a.createElement("li", null, "\u8be5\u4ee3\u7801\u5e94\u9075\u5faa\u7531 ", r.a.createElement("a", {
                                href: "https://solidity.readthedocs.io/en/v0.7.2/style-guide.html"
                            }, "\u6307\u5357"), " \u5b98\u65b9\u90e8\u5206 ", r.a.createElement("a", {
                                href: "https://solidity.readthedocs.io/en/v0.7.2/"
                            }, "Solidity 0.7.2\u6587\u6863"), "."), r.a.createElement("li", null, "\u6240\u6709\u516c\u5171\u63a5\u53e3\uff08\u81f3\u5c11\uff09\u5e94\u4f7f\u7528 ", r.a.createElement("a", {
                                href: "https://solidity.readthedocs.io/en/v0.7.2/natspec-format.html"
                            }, "NatSpec\u683c\u5f0f"), "."), r.a.createElement("li", null, "\u5355\u5143\u6d4b\u8bd5\u5e94\u63d0\u4f9b100\uff05\u7684\u6e90\u4ee3\u7801\u8986\u76d6\u7387\u3002 \u6240\u6709\u53ef\u80fd\u7684\u8fb9\u7f18\u548c\u89d2\u843d\u60c5\u51b5\u90fd\u5e94\u8986\u76d6\u3002"), r.a.createElement("li", null, "\u51fd\u6570\u548c\u53d8\u91cf\u540d\u79f0\u5e94\u4f7f\u7528\u7b80\u660e\u82f1\u8bed\u5c3d\u53ef\u80fd\u6e05\u695a\uff0c\u7b80\u6d01\u5730\u4f20\u8fbe\u5176\u76ee\u7684\u548c\u7528\u6cd5\u3002 \u907f\u514d\u4f7f\u7528\u6570\u5b57\uff0c\u4e0d\u5fc5\u8981\u7684\u7f29\u5199\uff0c\u9996\u5b57\u6bcd\u7f29\u5199\u8bcd\uff0c\u901f\u8bb0\u6216\u8bed\u3002"), r.a.createElement("li", null, "\u529f\u80fd\u5e94\u5c3d\u53ef\u80fd\u77ed\u3002 \u4ed6\u4eec\u5e94\u8be5\u6309\u7167\u81ea\u5df1\u7684\u540d\u5b57\u6240\u6697\u793a\u7684\u53bb\u505a\uff0c\u800c\u4e0d\u662f\u5176\u4ed6\u3002 \u4e00\u6761\u597d\u7684\u7ecf\u9a8c\u6cd5\u5219\u662f\uff0c\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff0c\u4e00\u4e2a\u51fd\u6570\u5e94\u8be5\u8bd5\u56fe\u5728\u4e00\u4e2a\u5178\u578b\u7684\u76d1\u89c6\u5668\u4e0a\u4ee5\u4e00\u4e2a\u5178\u578b\u7684\u5b57\u4f53\u5927\u5c0f\u6574\u4f53\u4e0a\u88ab\u67e5\u770b\u3002"), r.a.createElement("li", null, "\u5e94\u5f53\u660e\u667a\u5730\u4f7f\u7528\u8bc4\u8bba\u3002 \u4e0d\u8981\u53d1\u8868\u8bc4\u8bba\u4ee5\u89e3\u91ca\u4ee3\u7801\u7684\u4f5c\u7528\u3002 \u597d\u7684\u51fd\u6570\u548c\u53d8\u91cf\u540d\u5c06\u8fbe\u5230\u76ee\u7684\u3002"), r.a.createElement("li", null, r.a.createElement("code", null, "\u9700\u8981()"), "\u51fd\u6570\u8c03\u7528\u5e94\u8fd4\u56de\u7b80\u77ed\u4f46\u63cf\u8ff0\u6027\u7684\u9519\u8bef\u6d88\u606f\uff0c\u5e76\u59cb\u7ec8\u4ee5\u201c WISE\uff1a\u201d\u4e3a\u524d\u7f00\u3002"), r.a.createElement("li", null, "\u907f\u514d\u91cd\u590d\u4ee3\u7801"), r.a.createElement("li", null, "\u5c3d\u53ef\u80fd\u4ee5\u5b9e\u7528\u7684\u65b9\u5f0f\u4f18\u5148\u8003\u8651gas\u6548\u7387\u3002 \u51fa\u4e8e\u67d0\u4e9b\u91cd\u8981\u539f\u56e0\uff0c\u8be5\u4ee3\u7801\u7684\u67d0\u4e9b\u90e8\u5206\u53ef\u80fd\u4f1a\u727a\u7272\u5fae\u5c0f\u7684gas\u6548\u7387\u3002 \u5f53\u88ab\u8ba4\u4e3a\u5177\u6709\u66f4\u5927\u7684\u4ef7\u503c\u65f6\uff0c\u4ee3\u7801\u6613\u8bfb\uff0c\u7ed3\u6784\u7b80\u6d01\uff0c\u7b80\u5355\u6613\u61c2 \u5177\u6709\u5168\u529f\u80fd\u7684\u6700\u7ec8\u7528\u6237\u4f53\u9a8c \u5e94\u8be5\u4f18\u5148\u4e8e\u8fd9\u79cd\u5fae\u5c0f\u7684gas\u8282\u7701\u3002"))), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h3", {
                                id: "sec-7-3"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-7-3"
                            }, "\u9644\u5f55C"), "\xa0\xa0\u6e90\u4ee3\u7801\u5ba1\u6838"), r.a.createElement("p", null, "Wise Foundation\u5df2\u4ece\u4ee5\u4e0b\u673a\u6784\u83b7\u5f97\u4e86WISE\u5408\u540cSolidity\u6e90\u4ee3\u7801\u7684\u6709\u507f\u4e13\u4e1a\u5ba1\u6838\uff1a ", r.a.createElement("a", {
                                href: "https://www.coinfabrik.com/"
                            }, "CoinFabrik"), ", a \u4fe1\u8a89\u826f\u597d\u7684\u5ba1\u8ba1\u516c\u53f8\u3002 \u5b8c\u6574\u7684\u5ba1\u8ba1\u62a5\u544a\u5982\u4e0b\u3002"), r.a.createElement("p", null, "TL;DR - \u5ba1\u8ba1\u5e08\u7684\u7ed3\u8bba\u662f\uff0c \u201c", r.a.createElement("i", null, "\u6211\u4eec\u53d1\u73b0\uff0c\u5c3d\u7ba1\u8be5\u9879\u76ee\u663e\u793a\u51fa\u4e00\u5b9a\u7684\u590d\u6742\u6027\uff0c\u4f46\u4ee3\u7801\u7f16\u5199\u5f97\u5f88\u597d\u5e76\u4e14\u5df2\u8003\u8651\u5230\u5b89\u5168\u6027\u3002\u63d0\u4f9b\u7684\u6587\u6863\u4e5f\u975e\u5e38\u6709\u5e2e\u52a9\uff0c\u5e76\u4e14\u4e0e\u672a\u53d1\u73b0\u5b89\u5168\u95ee\u9898\u548c\u552f\u4e00\u7684\u975e\u5b89\u5168\u95ee\u9898\u6b63\u786e\u76f8\u5173 \u56e2\u961f\u5f88\u5feb\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898."), "\u201d"), r.a.createElement("embed", {
                                src: "/Wise_Audit_Report.pdf",
                                width: "100%",
                                height: "800px"
                            })), r.a.createElement("section", {
                                className: "text-left"
                            }, r.a.createElement("h2", {
                                className: "centered",
                                id: "sec-8"
                            }, r.a.createElement("a", {
                                href: "/docs#sec-8"
                            }, "References")), r.a.createElement("p", {
                                className: "bib"
                            }, "Adams, H. (2020, February). ", r.a.createElement("cite", null, "Uniswap whitepaper."), " ", r.a.createElement("a", {
                                href: "https://hackmd.io/@Uniswap/HJ9jLsfTz"
                            }, "https://hackmd.io/@Uniswap/HJ9jLsfTz")), r.a.createElement("p", {
                                className: "bib"
                            }, "Adams, H., Zinsmeister, N., Robinson, D. (2020, March). ", r.a.createElement("cite", null, "Uniswap v2 core."), " ", r.a.createElement("a", {
                                href: "https://uniswap.org/whitepaper.pdf"
                            }, "https://uniswap.org/whitepaper.pdf")), r.a.createElement("p", {
                                className: "bib"
                            }, "Knightly Crypto. (2020, March). ", r.a.createElement("cite", null, "Wise token: Trustless and easy interest-bearing crypto."), " ", r.a.createElement("a", {
                                href: "https://wisetoken.net/wise-token-white-paper.pdf"
                            }, "https://wisetoken.net/wise-token-white-paper.pdf")), r.a.createElement("p", {
                                className: "bib"
                            }, "Mushegian, N., Brockman, D., Brockman, M. (2018, February 6). ", r.a.createElement("cite", null, "Reference implementation of the decentralized DAI stablecoin issuance system."), " ", r.a.createElement("a", {
                                href: "https://makerdao.com/purple/"
                            }, "https://makerdao.com/purple/")), r.a.createElement("p", {
                                className: "bib"
                            }, "Oraclize. (n.d.). ", r.a.createElement("cite", null, "A scalable architecture for on-demand, untrusted delivery of entropy."), " Retrieved March 22, 2020, from ", r.a.createElement("a", {
                                href: "https://provable.xyz/papers/random_datasource-rev1.pdf"
                            }, "https://provable.xyz/papers/random_datasource-rev1.pdf"), "."), r.a.createElement("p", {
                                className: "bib"
                            }, "Provable Things. (n.d.). ", r.a.createElement("cite", null, "Security deep dive."), " Provable docs. Retrieved March 22, 2020, from ", r.a.createElement("a", {
                                href: "https://docs.provable.xyz//docs#security-deep-dive"
                            }, "https://docs.provable.xyz//docs#security-deep-dive")), r.a.createElement("p", {
                                className: "bib"
                            }, "Vogelsteller, F., & Buterin, V. (2015, November). ", r.a.createElement("cite", null, "EIP-20: ERC-20 token standard."), " ", r.a.createElement("a", {
                                href: "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md"
                            }, "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md")), r.a.createElement("p", {
                                className: "bib"
                            }, "Wood, G. (2019, October 20). ", r.a.createElement("cite", null, "Ethereum: A secure decentralized generalised transaction ledger: Byzantium version 7e819ec."), " ", r.a.createElement("a", {
                                href: "https://ethereum.github.io/yellowpaper/paper.pdf"
                            }, "https://ethereum.github.io/yellowpaper/paper.pdf")), r.a.createElement("p", {
                                className: "bib"
                            }, "Zhang, Y., Chen, X., & Park, D. (2018, October). ", r.a.createElement("cite", null, "Formal specification of constant product (x \xd7 y = k) market maker model and implementation."), " ", r.a.createElement("a", {
                                href: "https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf"
                            }, "https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf")))))))
                        }
                    }]), a
                }(n.Component);
            var w = function() {
                    var e = Object(m.d)((function(e) {
                        return e.app
                    })).lang;
                    return r.a.createElement(r.a.Fragment, null, "zh" === e ? r.a.createElement(g, null) : r.a.createElement(y, null))
                },
                v = a(790),
                k = a(729),
                I = a(732),
                T = a(906),
                S = a.n(T),
                W = a(909),
                N = a.n(W),
                x = a(904),
                M = a.n(x),
                H = a(905),
                L = a.n(H),
                U = a(907),
                C = a.n(U),
                D = a(908),
                R = a.n(D),
                A = a(343),
                P = a.n(A),
                q = a(130),
                O = a.n(q),
                F = a(910),
                z = a.n(F),
                B = a(772),
                j = a.n(B),
                V = a(914),
                X = a.n(V),
                Y = a(911),
                G = a.n(Y),
                _ = a(132),
                J = a.n(_),
                Z = a(912),
                $ = a.n(Z),
                K = a(128),
                Q = a.n(K),
                ee = a(913),
                te = a.n(ee),
                ae = a(915),
                le = a.n(ae),
                ne = a(916),
                re = a.n(ne),
                se = a(344),
                ce = a.n(se),
                ie = a(109),
                oe = a.n(ie),
                me = a(127),
                Ee = a.n(me),
                ue = a(917),
                de = a.n(ue),
                he = a(918),
                pe = a.n(he),
                fe = a(919),
                be = a.n(fe),
                ye = a(920),
                ge = a.n(ye),
                we = a(921),
                ve = a.n(we),
                ke = a(922),
                Ie = a.n(ke),
                Te = a(923),
                Se = a.n(Te),
                We = a(924),
                Ne = a.n(We),
                xe = a(925),
                Me = a.n(xe),
                He = a(926),
                Le = a.n(He),
                Ue = a(927),
                Ce = a.n(Ue),
                De = a(928),
                Re = a.n(De),
                Ae = a(932),
                Pe = a.n(Ae),
                qe = a(929),
                Oe = a.n(qe),
                Fe = a(930),
                ze = a.n(Fe),
                Be = a(931),
                je = a.n(Be),
                Ve = a(985),
                Xe = a(984),
                Ye = Object(I.a)((function(e) {
                    return {
                        root: {
                            color: e.palette.text.secondary,
                            "&:focus > $content": {
                                backgroundColor: "#fafafa",
                                color: "var(--tree-view-color)"
                            }
                        },
                        content: {
                            color: e.palette.text.secondary,
                            borderTopRightRadius: e.spacing(2),
                            borderBottomRightRadius: e.spacing(2),
                            paddingRight: e.spacing(1),
                            fontWeight: e.typography.fontWeightMedium,
                            "$expanded > &": {
                                fontWeight: e.typography.fontWeightRegular
                            }
                        },
                        group: {
                            marginLeft: 0,
                            "& $content": {
                                paddingLeft: e.spacing(2)
                            }
                        },
                        expanded: {},
                        label: {
                            fontWeight: "inherit",
                            color: "inherit"
                        },
                        labelRoot: {
                            display: "flex",
                            alignItems: "center",
                            padding: e.spacing(.5, 0)
                        },
                        labelIcon: {
                            marginRight: e.spacing(1)
                        },
                        labelText: {
                            fontWeight: "inherit",
                            flexGrow: 1
                        }
                    }
                }));

            function Ge(e) {
                var t = Ye(),
                    a = e.labelText,
                    l = e.labelIcon,
                    n = e.labelInfo,
                    s = e.color,
                    c = e.bgColor,
                    i = Object(v.a)(e, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);
                return r.a.createElement(Xe.a, Object.assign({
                    label: r.a.createElement("a", {
                        href: "/docs#sec-".concat(i.nodeId)
                    }, r.a.createElement("div", {
                        className: t.labelRoot
                    }, r.a.createElement(l, {
                        color: "inherit",
                        className: t.labelIcon
                    }), r.a.createElement(k.a, {
                        variant: "body2",
                        className: t.labelText
                    }, a), r.a.createElement(k.a, {
                        variant: "caption",
                        color: "inherit",
                        className: "pl-5"
                    }, n))),
                    style: {
                        "--tree-view-color": s,
                        "--tree-view-bg-color": c
                    },
                    classes: {
                        root: t.root,
                        content: t.content,
                        expanded: t.expanded,
                        group: t.group,
                        label: t.label
                    }
                }, i))
            }

            function _e() {
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ve.a, {
                    className: "treeview-primary",
                    defaultExpanded: ["2"],
                    defaultCollapseIcon: r.a.createElement(M.a, null),
                    defaultExpandIcon: r.a.createElement(L.a, null),
                    defaultEndIcon: r.a.createElement("div", {
                        style: {
                            width: 24
                        }
                    })
                }, r.a.createElement(Ge, {
                    nodeId: "1",
                    labelText: "Introduction",
                    labelIcon: S.a
                }, r.a.createElement(Ge, {
                    nodeId: "1-1",
                    labelText: "WISE Token Purpose",
                    labelIcon: C.a
                }), r.a.createElement(Ge, {
                    nodeId: "1-2",
                    labelText: "The Wise Foundation",
                    labelIcon: R.a
                }), r.a.createElement(Ge, {
                    nodeId: "1-3",
                    labelText: "Motivations and Principles",
                    labelIcon: P.a
                })), r.a.createElement(Ge, {
                    nodeId: "2",
                    labelText: "Wise Contract Functionality",
                    labelIcon: N.a
                }, r.a.createElement(Ge, {
                    nodeId: "2-1",
                    labelText: "General Properties",
                    labelIcon: O.a
                }, r.a.createElement(Ge, {
                    nodeId: "2-1-1",
                    labelText: "Token Supply",
                    labelIcon: z.a
                })), r.a.createElement(Ge, {
                    nodeId: "2-2",
                    labelText: "Liquidity Transformer Epoch",
                    labelIcon: G.a
                }, r.a.createElement(Ge, {
                    nodeId: "2-2-1",
                    labelText: "Token Reservation",
                    labelIcon: J.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-2-2",
                    labelText: "Daily LT Supply Schedule",
                    labelIcon: $.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-2-3",
                    labelText: "Reservation Referrals",
                    labelIcon: Q.a
                }, r.a.createElement(Ge, {
                    nodeId: "2-2-3-1",
                    labelText: "Referrer Bonuses",
                    labelIcon: te.a
                }))), r.a.createElement(Ge, {
                    nodeId: "2-3",
                    labelText: "Circulation Epoch",
                    labelIcon: j.a
                }, r.a.createElement(Ge, {
                    nodeId: "2-3-1",
                    labelText: "Uniswap Provision",
                    labelIcon: X.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-2",
                    labelText: "Wise Foundation Reimbursement",
                    labelIcon: le.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-3",
                    labelText: "Minting Tokens",
                    labelIcon: re.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-4",
                    labelText: "Supply Inflation",
                    labelIcon: oe.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-5",
                    labelText: "Staking",
                    labelIcon: Ee.a
                }, r.a.createElement(Ge, {
                    nodeId: "2-3-5-1",
                    labelText: "Opening Stakes",
                    labelIcon: de.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-5-2",
                    labelText: "Shares and Interest",
                    labelIcon: pe.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-5-3",
                    labelText: "Scraping Stake Interest",
                    labelIcon: be.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-5-4",
                    labelText: "Closing Stakes",
                    labelIcon: ge.a
                }), r.a.createElement(Ge, {
                    nodeId: "2-3-5-5",
                    labelText: "Stake Referrals",
                    labelIcon: ve.a
                })), r.a.createElement(Ge, {
                    nodeId: "2-3-6",
                    labelText: "Liquidity Provider Staking",
                    labelIcon: Ie.a
                })), r.a.createElement(Ge, {
                    nodeId: "2-4",
                    labelText: "ERC-20 Functionality",
                    labelIcon: ce.a
                })), r.a.createElement(Ge, {
                    nodeId: "3",
                    labelText: "Wise Ecosystem",
                    labelIcon: Se.a
                }, r.a.createElement(Ge, {
                    nodeId: "3-1",
                    labelText: "Referral Links",
                    labelIcon: Ne.a
                })), r.a.createElement(Ge, {
                    nodeId: "4",
                    labelText: "Conclusion",
                    labelIcon: Me.a
                }), r.a.createElement(Ge, {
                    nodeId: "5",
                    labelText: "Acknowledgements",
                    labelIcon: Le.a
                }), r.a.createElement(Ge, {
                    nodeId: "6",
                    labelText: "Availability",
                    labelIcon: Ce.a
                }), r.a.createElement(Ge, {
                    nodeId: "7",
                    labelText: "Appendices",
                    labelIcon: Re.a
                }, r.a.createElement(Ge, {
                    nodeId: "7-1",
                    labelText: "Terminology",
                    labelIcon: Oe.a
                }), r.a.createElement(Ge, {
                    nodeId: "7-2",
                    labelText: "Coding Standards",
                    labelIcon: ze.a
                }), r.a.createElement(Ge, {
                    nodeId: "7-3",
                    labelText: "Source Code Audit",
                    labelIcon: je.a
                })), r.a.createElement(Ge, {
                    nodeId: "8",
                    labelText: "References",
                    labelIcon: Pe.a
                })))
            }

            function Je() {
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(b.a, null, r.a.createElement("div", {
                    className: "px-0 pt-3 mt-3 pr-3"
                }, r.a.createElement(_e, null)), r.a.createElement("div", {
                    className: "divider"
                }), r.a.createElement("div", {
                    className: "w-100 bg-white p-4 d-flex align-items-center"
                }, r.a.createElement("div", {
                    className: "d-flex flex-column flex-grow-1 justify-content-center w-100"
                }, r.a.createElement("div", null, r.a.createElement("div", {
                    className: "text-success align-items-center justify-content-center"
                }, r.a.createElement("a", {
                    href: "/teal",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "d-flex align-items-center"
                }, r.a.createElement("div", {
                    className: "text-black-50 pt-0"
                }, "Original Teal Paper"), r.a.createElement("div", {
                    className: "ml-auto"
                }, r.a.createElement("div", {
                    className: "badge badge-dark mr-3"
                }, "Read now"), r.a.createElement(o.a, {
                    icon: ["fas", "chevron-right"],
                    className: "font-size-xs opacity-3"
                })))))))))
            }

            function Ze() {
                s.a.initialize("UA-168804464-1"), s.a.pageview(window.location.pathname + window.location.search);
                var e = Object(n.useState)(!1),
                    t = Object(l.a)(e, 2),
                    a = t[0],
                    m = t[1],
                    E = function() {
                        return m(!a)
                    };
                return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "d-block d-lg-flex app-inner-content-layout app-inner-content-layout-fixed"
                }, r.a.createElement("div", {
                    className: "btn-md-pane d-lg-none px-4 order-0"
                }, r.a.createElement(i.a, {
                    onClick: E,
                    size: "large",
                    className: "btn-primary p-0 btn-icon d-40"
                }, r.a.createElement(o.a, {
                    icon: ["fas", "bookmark"]
                }))), r.a.createElement("div", {
                    className: Object(c.a)("d-none d-lg-block app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__xxl order-1", {
                        "d-block": a
                    })
                }, r.a.createElement(Je, null)), r.a.createElement("div", {
                    className: "app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary"
                }, r.a.createElement(w, null)), r.a.createElement("div", {
                    onClick: E,
                    className: Object(c.a)("sidebar-inner-layout-overlay", {
                        active: a
                    })
                })))
            }
        }
    }
]);