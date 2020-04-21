<template>
    <div class="bg-gray-200 min-h-screen px-2 flex flex-wrap py-8 justify-center">
        <div v-for="(project, index) in projects" v-bind:key="(project, index)">
            <HorizontalCard :doc="project"/>
        </div>
    </div>  
</template>

<script>

import HorizontalCard from '../components/HorizontalCard.vue'

export default {
    name: "ProjectBoard",
    components: {
        HorizontalCard,
    },
    data: () => ({
        projects: [
            {
                imageURL: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
                title: 'Leveraging Compute Power for Drug Discovery',
                course: 'ENG2003',
                type: 'Technical Report',
                content: 'My academic weaknesses have always shown themselves through pure sciences such as chemistry and biology. Until recently, I have been ignorant of the plethora of applications where they are used. As a healthy young citizen of a first world country, I have never had to utilize or intake any pharmaceutical drugs other than the occasional Tylenol. However, in today\'s global pandemic crisis where the cure for COVID-19 is a race against time, I have been able to realize the need for timely and effective drug discovery. Most people never realize the copious amount of money, time and human labor that it takes for a novel drug to be put into production. As a software engineer with a background in machine learning and AI, I have always looked for unconventional applications of my knowledge. One of my goals in academia is to publish a research paper based on AI and machine learning, this technical report is a critical step towards this goal. This technical report is the cumulative effort of the lab reports, design journals and experimental reports that I have written. I am extremely proud of the improvements my technical writing has made throughout these past years and this report is a personal monument to my ever-expanding technical writing skills.'
            },
            {
                imageURL: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/3732480/3732480-1585444835024-6e9ef9b9c9cb3.jpg',
                title: 'Amateur Hour - Developer Podcast',
                course: 'Personal',
                type: 'Podcast',     
                content: 'As a longtime listener of software engineering podcasts, I realized that this medium was an effective way to educate other like-minded developers about the fast-paced world of software. After many requests from close friends, "Amateur Hour" was born to improve the experiences of developers just like me. Podcasting about code is a unique endeavor due to the very visual nature of some concepts in computer science. This forces me to leverage many rhetorical devices to achieve a concise way of conveying complicated details. Interviewing guests on the podcasts require a different mindset compared to a regular conversation, I am constantly thinking, "What can I learn from them?" during the duration of the interview. I strive constantly to maintain an engaging tone and ask concise questions that can garner open-ended and creative responses. I am actively trying to improve my oral communication skills to make this podcast both engaging and informative. ENG2003 has given me the confidence of displaying my vocal presentation skills into a format that is popular in today\'s world. I hope that I get the opportunity to continue to enhance my podcast as I learn more about engaging and informative communication.'
            },
            {
                imageURL: 'https://images.unsplash.com/photo-1502780809386-f4ed7a4a4c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                title: 'Back of a napkin - Containerization',
                course: 'ENG2003',
                type: 'Video', 
                content: 'In the summer of 2018, I decided to develop my drawing and design skills. This activity came from my job as a computer science instructor who taught robotics and coding to kids from the ages of 6-16. I found that no matter how concise or descriptive my lessons were, my students always needed something visual to understand a difficult concept. However, my drawings and diagrams were mediocre at best and almost served as a distraction rather than an enhancement to the lesson. From that experience, I realized that the way to take improve my communication for education was to enhance my ability to provide visual experiences to improve a lesson. This project allowed me to showcase the skills I have been developing since that experience. I believe that a difficult concept such as containerization can be helped immensely by simple shapes and relatable formats. This video is an accurate representation of how I would explain a difficult and intricate computer science concept to someone in person with just a napkin and a pen.',
            },
            {
                imageURL: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                title: 'Feedback Control Loops',
                course: 'ENG2003',
                type: 'Poster', 
                content: 'Feedback control loops can be an extremely complicated process with many variables and require background knowledge from multi-variable calculus to statistics. As a high school student, I competed in an international robotics league that demanded taking advantage of the techniques and technologies typically out of depth for a 15-year-old. This included learning about PID (Proportional, Integral, Derivative) control loops, which is a concept usually reserved for undergraduate engineering students. Learning about this concept proved difficult as there were no beginner-friendly learning resources. This poster I made is my way of proving that a seemingly out of reach concept can be to children with a basic understanding of rates and changes of a measurement. By enhancing my explanation in accessible diagrams and illustrations I believe that I could give this poster to myself 5 years ago and help myself achieve a quicker understanding of this concept.',
            },
    ]
    })
}

</script>