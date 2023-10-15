import { User } from "../../domain/models/User";

export const users: User[] = [
  {
    id: 1,
    name: "Gustavo Guerrero",
    email: "user_test_1@test.com",
    password: "123456",
    cards: [
      {
        status: "expired",
        dateStart: "01/01/2023",
        dateEnd: "04/01/2023",
        comsuption: null,
        flag: "https://e6b6n7w7.stackpathcdn.com/es/wp-content/uploads/sites/21/2023/05/Mexico.png",
        country: "Mexico",
        plan: "4 dias, 3GB",
      },
      {
        status: "expired",
        dateStart: "02/01/2023",
        dateEnd: "02/01/2023",
        comsuption: null,
        flag: "https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2020/05/United-States.png",
        country: "USA",
        plan: "30 dias, 25GB",
      },
      {
        status: "pending",
        dateStart: "01/01/2024",
        dateEnd: null,
        comsuption: {
          totalComsumption: 1468006.4,
        },
        flag: "https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2020/05/United-Kingdom.png",
        country: "United Kingdown",
        plan: "1 dia, 1.4GB",
      },
      {
        status: "active",
        dateStart: "06/10/2023",
        dateEnd: "16/10/2023",
        comsuption: {
          totalComsumption: 4194304,
        },
        flag: "https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2020/05/Japan.png",
        country: "Japan",
        plan: "10 dias, 12GB",
      },
    ],
  },
  {
    id: 2,
    name: "Andres Guerrero",
    email: "user_test_2@test.com",
    password: "1234567",
    cards: [
      {
        status: "expired",
        dateStart: "01/01/2023",
        dateEnd: "04/01/2023",
        comsuption: null,
        flag: "https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2020/05/Europe.png",
        country: "Europe",
        plan: "4 dias, 3GB",
      },
      {
        status: "active",
        dateStart: "02/01/2023",
        dateEnd: "02/01/2023",
        comsuption: {
          totalComsumption: 2468006.4,
        },
        flag: "https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2020/05/Turkey.png",
        country: "Turkey",
        plan: "30 dias, 25GB",
      },
      {
        status: "pending",
        dateStart: "01/01/2024",
        dateEnd: null,
        comsuption: {
          totalComsumption: 1468006.4,
        },
        flag: "https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2020/05/Egypt.png",
        country: "Egypt",
        plan: "1 dia, 1.4GB",
      },
      {
        status: "active",
        dateStart: "06/10/2023",
        dateEnd: "16/10/2023",
        comsuption: {
          totalComsumption: 12582912,
        },
        flag: "https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2020/05/Europe.png",
        country: "Europe",
        plan: "10 dias, 12GB",
      },
    ],
  },
];
