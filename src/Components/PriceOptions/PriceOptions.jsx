import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Starter Pack",
      price: 25,
      features: [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker room access",
        "Fitness assessment",
        "Basic gym equipment orientation",
        "Access to stretching area",
      ],
    },
    {
      id: 2,
      name: "Active Membership",
      price: 45,
      features: [
        "All features of Starter Pack",
        "Unlimited group fitness classes",
        "Personalized workout plans",
        "Nutritional consultation",
        "Access to swimming pool",
        "Access to basketball court",
      ],
    },
    {
      id: 3,
      name: "Elite Membership",
      price: 75,
      features: [
        "All features of Active Membership",
        "Access to sauna and steam room",
        "Priority booking for personal training sessions",
        "Discounts on gym merchandise",
        "Access to exclusive member events",
        "Guest passes for friends",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6 m-12">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
