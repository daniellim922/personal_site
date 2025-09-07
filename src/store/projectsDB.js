import Project from "../components/Project.svelte";

export const projectsDB = [
    {
        page: {
            title: "RBS",
            coordinates: {
                top: 250,
                left: 800,
                width: 750,
                height: 400,
                zIndex: 0,
            },
            visible: false,
            component: Project,
        },
        fullTitle: "UOW Room Booking System",
        logo: "/src/public/assets/logos/uow.webp",
        purpose: [
            "Developed for a project management module",
            "Administrator can create new rooms for booking, adjust time slots and set prices",
            "Students can book, edit or cancel room bookings at given time slots",
        ],
        technology: [""],
    },
];
