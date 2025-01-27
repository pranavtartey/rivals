type Price = {
    price: string,
    duration: string,
    popular: boolean,
    features: string[]
}

export const Prices: Price[] = [
    {
        price: "500",
        duration: "1 Hour",
        popular: false,
        features: [
            "Best for solo/Dual",
            "Own a platform/sofa",
            "Play at peace"
        ]
    },
    {
        price: "1000",
        duration: "3 Hours",
        popular: true,
        features: [
            "Best for group",
            "Free switches",
            "Own a Platform/sofa",
            "Play at peace",
            "Try all platforms (Time divides equally)"
        ]
    },
    {
        price: "2500",
        duration: "10 Hours",
        popular: false,
        features: [
            "Loved for gamers",
            "Pay once, visit any time (valid for spicified time)",
            "Coupon valid for days of gaming",
            "Free switches",
            "Own all platforms",
            "Play at peace",
        ]
    }
]