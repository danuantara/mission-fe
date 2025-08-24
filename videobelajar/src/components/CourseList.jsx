import CouseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    image: "/assets/image1.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/1.png",
    role: "Senior Accountant di ",
    rating: 3.5,
    reviews: 86,
    price: 300000,
  },
  {
    id: 2,
    image: "/assets/image2.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/2.png",
    role: "Senior Accountant di ",
    rating: 4.2,
    reviews: 102,
    price: 250000,
  },
  {
    id: 3,
    image: "/assets/image3.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/3.png",
    role: "Senior Accountant di ",
    rating: 4.8,
    reviews: 200,
    price: 350000,
  },
  {
    id: 4,
    image: "/assets/image4.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/4.png",
    role: "Senior Accountant di ",
    rating: 3.5,
    reviews: 86,
    price: 300000,
  },
  {
    id: 5,
    image: "/assets/image5.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/5.png",
    role: "Senior Accountant di ",
    rating: 4.2,
    reviews: 102,
    price: 250000,
  },
  {
    id: 6,
    image: "/assets/image6.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/6.png",
    role: "Senior Accountant di ",
    rating: 4.8,
    reviews: 200,
    price: 350000,
  },
  {
    id: 7,
    image: "/assets/image7.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/7.png",
    role: "Senior Accountant di ",
    rating: 3.5,
    reviews: 86,
    price: 300000,
  },
  {
    id: 8,
    image: "/assets/image8.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/8.png",
    role: "Senior Accountant di ",
    rating: 4.2,
    reviews: 102,
    price: 250000,
  },
  {
    id: 9,
    image: "/assets/image9.jpg",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi berkualitas.",
    teacher: "Jenna Ortega",
    teacherAvatar: "/assets/9.png",
    role: "Senior Accountant di ",
    rating: 4.8,
    reviews: 200,
    price: 350000,
  },
];

export default function CourseList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CouseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
