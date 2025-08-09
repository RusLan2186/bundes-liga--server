let calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      start: '2025-08-08',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-12',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-12',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },

    {
      start: '2025-08-12',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-16',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-16',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-27',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
     {
      start: '2025-08-27',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-31',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
     {
      start: '2025-08-31',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
      {
      start: '2025-08-31',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },
        {
      start: '2025-09-05',
      extendedProps: {
        homeLogo: '/images/c293d450a9987e168365e8cad972256d.png',
        awayLogo: '/images/cdda12d197e20b2e0cd35c689d753b7b.png',
        homeShort: 'BAR',
        awayShort: 'RMA',
        time: '20:00',
        matchUrl: '#'
      }
    },

  ],
  eventContent: function (arg) {
    const { homeLogo, awayLogo, homeShort, awayShort, time, matchUrl } = arg.event.extendedProps;

    return {
      html: `
        <div class="event-wrapper">
          <div class="event-top">
            <a href="${matchUrl}"  class="team">
              <img src="${homeLogo}" alt="${homeShort}" class="team-logo" />
              <div class="team-code">${homeShort}</div>
            </a>
            <div class="time">${time}</div>
            <a href="${matchUrl}" class="team">
              <img src="${awayLogo}" alt="${awayShort}" class="team-logo" />
              <div class="team-code">${awayShort}</div>
            </a>
          </div>
          <div class="event-bottom">
            <a href="${matchUrl}" class="match-center-btn">Match center</a>
          </div>
        </div>
      `
    };
  }
});

calendar.render();
