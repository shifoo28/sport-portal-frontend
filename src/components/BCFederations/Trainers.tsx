import React from "react";

const data = [
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
];

const Trainers = () => {
  return (
    <div>
      <div className="w-full h-max p-8 grid grid-cols-3 scroll-smooth">
        {data.map((trainer) => {
          return (
            <div className="w-full h-[105px]">
                <img src={trainer.imgLink} className="object-cover w-[95px]" />
              <div>
                <p></p>
                <div></div>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trainers;
