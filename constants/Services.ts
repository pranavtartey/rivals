import foodeImage from "@/assets/food-service-logo.png"
import communityImage from "@/assets/gathring-service-logo.png"
import gamesImage from "@/assets/games-service-logo.png"
import { StaticImageData } from "next/image"

type Service = {
    title: string,
    description: string
    image: StaticImageData
}

export const Services: Service[] = [
    {
        title: "Parties",
        description: "We all love parties and we're sure you do too. We are open for birthday party bookings and small to medium gatherings.",
        image: communityImage
    },
    {
        title: "Gaming",
        description: "One of our USP is gaming. Come and enjoy the best games at max resolution on the platform you love.",
        image: gamesImage
    },
    {
        title: "Foodie",
        description: "Are you a foodie? We offer differnet mouth watering tastes across various different cuisine/delicacies.",
        image: foodeImage
    },

]