import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Mixed Martial Arts (MMA) Classes",
    description:
      "MMA classes (Mixed Martial Arts classes) are a form of combat sport that incorporates various techniques from different martial arts disciplines, including striking, grappling, and submission holds. These classes typically involve a combination of intense physical training and technical instruction to improve strength, agility, and fighting skills.",
    image: image1,
  },
  {
    name: "Brazilian Jiu-Jitsu",
    description:
      "Brazilian Jiu-Jitsu classes are focused on teaching techniques for ground fighting, grappling, and submission holds. These classes often involve intense physical training, including drills and sparring sessions to develop strength, agility, and technique. BJJ classes are suitable for individuals of all fitness levels and are popular for their self-defense benefits, as well as their ability to improve overall physical health.",
    image: image2,
  },
  {
    name: "Crossfit",
    description:
      "Crossfit classes are high-intensity workouts that combine elements of weightlifting, gymnastics, and metabolic conditioning. These classes are designed to improve overall fitness and functional strength by challenging participants with varied, intense exercises. Crossfit classes are suitable for individuals of all fitness levels, as the workouts can be scaled and modified to accommodate different abilities.",
    image: image3,
  },
  {
    name: "Kickboxing",
    description:
      "Kickboxing classes are a type of martial arts training that combines boxing with kicking techniques. These classes typically involve a combination of cardio and strength training exercises that improve overall fitness and coordination. Kickboxing classes are suitable for individuals of all fitness levels and are popular for their ability to build self-confidence and improve self-defense skills.",
    image: image4,
  },
  {
    name: "Weight Training",
    description:
      "Weight training classes are focused on building strength and muscle mass through resistance exercises, typically using weights or other equipment. These classes may involve a variety of exercises targeting different muscle groups, with the goal of increasing overall strength and fitness. Weight training classes are suitable for individuals of all fitness levels and are popular for their ability to improve body composition, bone density, and overall health.",
    image: image5,
  },
  {
    name: "Personal Training",
    description:
      "Classes with coaches typically involve instruction and guidance from a trained fitness professional, who leads participants through exercises and provides feedback and motivation. These classes may focus on a variety of fitness goals, from weight loss to strength training, and are tailored to the needs of each individual.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              We offer a wide range of classes, including Brazilian Jiu-Jitsu,
              Muay Thai, and wrestling, to help you reach your fitness goals and
              build your fighting skills. We will make sure you find what you
              want!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-primary-100">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
