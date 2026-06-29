// Centralized data mirroring the content that was hand-duplicated across the
// original HTML pages (home.html, courses.html, teachers.html, playlist*.html, etc).
// Image / video paths are kept identical to the original project's `images/...`
// references so they work once those assets are placed in /public/images.

export const currentUser = {
  name: 'Sanjog',
  role: 'student',
  image: 'images/pic-1.jpg',
};

export const courses = [
  { id: 'html', tutor: 'Deepika', tutorImg: 'images/pic-2.jpg', date: '21-10-2022', thumb: 'images/thumb-1.png', title: 'complete HTML tutorial', playlist: '/playlist/html' },
  { id: 'css', tutor: 'Anurag Singh', tutorImg: 'images/pic-3.jpg', date: '21-10-2022', thumb: 'images/thumb-2.png', title: 'complete CSS tutorial', playlist: '/playlist/css' },
  { id: 'js', tutor: 'Abbas Raza', tutorImg: 'images/pic-4.jpg', date: '21-10-2022', thumb: 'images/thumb-3.png', title: 'complete JS tutorial', playlist: '/playlist/js' },
  { id: 'bootstrap', tutor: 'Shruti', tutorImg: 'images/pic-5.jpg', date: '21-10-2022', thumb: 'images/thumb-4.png', title: 'complete Boostrap tutorial', playlist: '/playlist/html' },
  { id: 'jquery', tutor: 'Aditya Singh', tutorImg: 'images/pic-6.jpg', date: '21-10-2022', thumb: 'images/thumb-5.png', title: 'complete JQuery tutorial', playlist: '/playlist/html' },
  { id: 'sass', tutor: 'Priya', tutorImg: 'images/pic-7.jpg', date: '21-10-2022', thumb: 'images/thumb-6.png', title: 'complete SASS tutorial', playlist: '/playlist/html' },
  { id: 'php', tutor: 'Abhishek', tutorImg: 'images/pic-8.jpg', date: '21-10-2022', thumb: 'images/thumb-7.png', title: 'complete PHP tutorial', playlist: '/playlist/html' },
  { id: 'mysql', tutor: 'Ayush Mishra', tutorImg: 'images/pic-9.jpg', date: '21-10-2022', thumb: 'images/thumb-8.png', title: 'complete MySQL tutorial', playlist: '/playlist/html' },
  { id: 'react', tutor: 'Ansh Upadhyay', tutorImg: 'images/pic-1.jpg', date: '21-10-2022', thumb: 'images/thumb-9.png', title: 'complete react tutorial', playlist: '/playlist/html' },
];

// home page only shows the first six courses
export const homeCourses = courses.slice(0, 6);

export const teachers = [
  { id: 'deepika', name: 'Deepika', img: 'images/pic-2.jpg', role: 'developer', playlists: 4, videos: 18, likes: 1208 },
  { id: 'anurag', name: 'Anurag Singh', img: 'images/pic-3.jpg', role: 'developer', playlists: 4, videos: 18, likes: 1208 },
  { id: 'abbas', name: 'Abbas Raza', img: 'images/pic-4.jpg', role: 'developer', playlists: 4, videos: 18, likes: 1208 },
  { id: 'shruti', name: 'Shruti', img: 'images/pic-5.jpg', role: 'developer', playlists: 4, videos: 18, likes: 1208 },
  { id: 'aditya', name: 'Aditya Singh', img: 'images/pic-6.jpg', role: 'developer', playlists: 4, videos: 18, likes: 1208 },
  { id: 'priya', name: 'Priya', img: 'images/pic-7.jpg', role: 'developer', playlists: 4, videos: 18, likes: 1208 },
  { id: 'abhishek', name: 'Abhishek', img: 'images/pic-8.jpg', role: 'developer', playlists: 4, videos: 18, likes: 1208 },
];

// playlists keyed by the same id used in courses[].playlist ('/playlist/:id')
// mirrors playlist.html / playlist-CSS.html / playlist-JS.html, which were
// identical templates with swapped-out data
export const playlists = {
  html: {
    id: 'html',
    thumb: 'images/thumb-1.png',
    tutor: 'Deepika',
    tutorImg: 'images/pic-2.jpg',
    date: '21-10-2022',
    title: 'complete HTML tutorial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.',
    videos: [1, 2, 3, 4, 5, 6].map((n) => ({
      id: `html-${n}`,
      thumb: `images/post-1-${n}.png`,
      video: 'images/vid-1.mp4',
      title: `complete HTML tutorial (part 0${n})`,
    })),
  },
  css: {
    id: 'css',
    thumb: 'images/thumb-2.png',
    tutor: 'Anurag Singh',
    tutorImg: 'images/pic-3.jpg',
    date: '21-10-2022',
    title: 'complete CSS tutorial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.',
    videos: [1, 2, 3, 4, 5, 6].map((n) => ({
      id: `css-${n}`,
      thumb: `images/post-2-${n}.png`,
      video: 'images/vid-2.mp4',
      title: `complete CSS tutorial (part 0${n})`,
    })),
  },
  js: {
    id: 'js',
    thumb: 'images/thumb-3.png',
    tutor: 'Abbas Raza',
    tutorImg: 'images/pic-4.jpg',
    date: '21-10-2022',
    title: 'complete JS tutorial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.',
    videos: [1, 2, 3, 4, 5, 6].map((n) => ({
      id: `js-${n}`,
      thumb: `images/post-3-${n}.png`,
      video: 'images/vid-3.mp4',
      title: `complete JS tutorial (part 0${n})`,
    })),
  },
};

export const comments = [
  { id: 1, user: 'Sanjog', img: 'images/pic-1.jpg', date: '22-10-2022', text: 'this is a comment form shaikh anas', editable: true },
  { id: 2, user: 'Anurag Singh', img: 'images/pic-2.jpg', date: '22-10-2022', text: 'awesome tutorial!\nkeep going!' },
  { id: 3, user: 'Abbas Raza', img: 'images/pic-3.jpg', date: '22-10-2022', text: 'amazing way of teaching!\nthank you so much!' },
  { id: 4, user: 'Shruti', img: 'images/pic-4.jpg', date: '22-10-2022', text: 'loved it, thanks for the tutorial!' },
  { id: 5, user: 'Aditya Singh', img: 'images/pic-5.jpg', date: '22-10-2022', text: 'this is what I have been looking for! thank you so much!' },
  { id: 6, user: 'Priya', img: 'images/pic-2.jpg', date: '22-10-2022', text: 'thanks for the tutorial!\n\nhow to download source code file?' },
];

export const reviews = [
  { id: 1, name: 'Deepika', img: 'images/pic-2.jpg' },
  { id: 2, name: 'Anurag Singh', img: 'images/pic-3.jpg' },
  { id: 3, name: 'Abbas Raza', img: 'images/pic-4.jpg' },
  { id: 4, name: 'Shruti', img: 'images/pic-5.jpg' },
  { id: 5, name: 'Aditya Singh', img: 'images/pic-6.jpg' },
  { id: 6, name: 'Priya', img: 'images/pic-7.jpg' },
].map((r) => ({
  ...r,
  text:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?',
}));
