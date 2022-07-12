task("get-wizard", "gets the balance of Wizard test tokens").setAction(
    async (taskArgs) => {
        const { user1 } = await getNamedAccounts()
        const wizard = await ethers.getContract("Wizard", user1)

        const weiBalance = (await wizard.balanceOf(user1)).toString()
        const balance = ethers.utils.formatEther(weiBalance)
        console.log(`Balance of Wizard token is ${balance}`)
    }
)

task("mint-wizard", "mints Wizard test tokens")
    .addParam("amount", "amount of tokens to mint")
    .setAction(async (taskArgs) => {
        const { user1 } = await getNamedAccounts()
        const wizard = await ethers.getContract("Wizard", user1)

        const mintAmount = taskArgs.amount.toString()
        const mint = await wizard.mint(user1, mintAmount)
        await mint.wait()

        const weiBalance = (await wizard.balanceOf(user1)).toString()
        const balance = ethers.utils.formatEther(weiBalance)
        console.log(`Balance of Wizard token is ${balance}`)
    })

task("get-elf", "gets the balance of Elf test tokens").setAction(
    async (taskArgs) => {
        const { user1 } = await getNamedAccounts()
        const wizard = await ethers.getContract("Elf", user1)

        const weiBalance = (await wizard.balanceOf(user1)).toString()
        const balance = ethers.utils.formatEther(weiBalance)
        console.log(`Balance of Elf token is ${balance}`)
    }
)

task("mint-elf", "mints Elf test tokens")
    .addParam("amount", "amount of tokens to mint")
    .setAction(async (taskArgs) => {
        const { user1 } = await getNamedAccounts()
        const wizard = await ethers.getContract("Elf", user1)

        const mintAmount = taskArgs.amount.toString()
        const mint = await wizard.mint(user1, mintAmount)
        await mint.wait()

        const weiBalance = (await wizard.balanceOf(user1)).toString()
        const balance = ethers.utils.formatEther(weiBalance)
        console.log(`Balance of Elf token is ${balance}`)
    })

task("get-usd", "gets the balance of Usd test tokens").setAction(
    async (taskArgs) => {
        const { user1 } = await getNamedAccounts()
        const wizard = await ethers.getContract("StableCoin", user1)

        const weiBalance = (await wizard.balanceOf(user1)).toString()
        const balance = ethers.utils.formatEther(weiBalance)
        console.log(`Balance of Usd token is ${balance}`)
    }
)

task("mint-usd", "mints Usd test tokens")
    .addParam("amount", "amount of tokens to mint")
    .setAction(async (taskArgs) => {
        const { user1 } = await getNamedAccounts()
        const wizard = await ethers.getContract("StableCoin", user1)

        const mintAmount = taskArgs.amount.toString()
        const mint = await wizard.mint(user1, mintAmount)
        await mint.wait()

        const weiBalance = (await wizard.balanceOf(user1)).toString()
        const balance = ethers.utils.formatEther(weiBalance)
        console.log(`Balance of Usd token is ${balance}`)
    })
