<template>
 <div id="map">
        <div class="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.4081526354655!2d73.08211231472022!3d19.230676998093987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7be1caeeb7c25%3A0xd3007bf520b0060e!2sShri%20Ganesh%20Sankul!5e0!3m2!1sen!2sin!4v1636368411431!5m2!1sen!2sin"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>    
</template>

<script>
export default {
    data() {
        return {
           show: false,
            items: [{
                    icon: 'mdi-apps',
                    title: 'About',
                    to: '/'
                },
                {
                    icon: 'mdi-domain',
                    title: 'Experience',
                    to: '/experience'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Portfolio',
                    to: '/portfolio'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Skills',
                    to: '/skills'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Blogs',
                    to: '/blogs'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Projects',
                    to: '/projects'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Contact',
                    to: '/contact'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Hire Me',
                    to: '/hireme'
                }
            ],
        };
    },
};
</script>
