import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import BookingForm from "../../components/BookingForm/BookingForm";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BookingForm />
      <Services />
    </div>
  );
};

export default HomePage;
