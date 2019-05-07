// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from "graphql-tag"

export const onCreateSpeaker = `subscription OnCreateSpeaker {
  onCreateSpeaker {
    id
    name
    bio
    image
    employer
    facebook
    github
    twitter
    instagram
    medium
    dribbble
    websites
    talk {
      id
      title
      description
      startTime
      endTime
      talkType
      sponsor
      speakers {
        nextToken
      }
      menuItems
      image
      location
      comments {
        nextToken
      }
    }
  }
}
`
export const onUpdateSpeaker = `subscription OnUpdateSpeaker {
  onUpdateSpeaker {
    id
    name
    bio
    image
    employer
    facebook
    github
    twitter
    instagram
    medium
    dribbble
    websites
    talk {
      id
      title
      description
      startTime
      endTime
      talkType
      sponsor
      speakers {
        nextToken
      }
      menuItems
      image
      location
      comments {
        nextToken
      }
    }
  }
}
`
export const onDeleteSpeaker = `subscription OnDeleteSpeaker {
  onDeleteSpeaker {
    id
    name
    bio
    image
    employer
    facebook
    github
    twitter
    instagram
    medium
    dribbble
    websites
    talk {
      id
      title
      description
      startTime
      endTime
      talkType
      sponsor
      speakers {
        nextToken
      }
      menuItems
      image
      location
      comments {
        nextToken
      }
    }
  }
}
`
export const onCreateTalk = `subscription OnCreateTalk {
  onCreateTalk {
    id
    title
    description
    startTime
    endTime
    talkType
    sponsor
    speakers {
      items {
        id
        name
        bio
        image
        employer
        facebook
        github
        twitter
        instagram
        medium
        dribbble
        websites
      }
      nextToken
    }
    menuItems
    image
    location
    comments {
      items {
        id
        talkId
        clientId
        text
        createdAt
        createdBy
      }
      nextToken
    }
  }
}
`
export const onUpdateTalk = `subscription OnUpdateTalk {
  onUpdateTalk {
    id
    title
    description
    startTime
    endTime
    talkType
    sponsor
    speakers {
      items {
        id
        name
        bio
        image
        employer
        facebook
        github
        twitter
        instagram
        medium
        dribbble
        websites
      }
      nextToken
    }
    menuItems
    image
    location
    comments {
      items {
        id
        talkId
        clientId
        text
        createdAt
        createdBy
      }
      nextToken
    }
  }
}
`
export const onDeleteTalk = `subscription OnDeleteTalk {
  onDeleteTalk {
    id
    title
    description
    startTime
    endTime
    talkType
    sponsor
    speakers {
      items {
        id
        name
        bio
        image
        employer
        facebook
        github
        twitter
        instagram
        medium
        dribbble
        websites
      }
      nextToken
    }
    menuItems
    image
    location
    comments {
      items {
        id
        talkId
        clientId
        text
        createdAt
        createdBy
      }
      nextToken
    }
  }
}
`
export const onCreateComment = gql`
  subscription OnCreateComment($talkId: ID!) {
    onCreateComment(talkId: $talkId) {
      id
      talkId
      clientId
      text
      createdAt
      createdBy
    }
  }
`
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    talkId
    clientId
    talk {
      id
      title
      description
      startTime
      endTime
      talkType
      sponsor
      speakers {
        nextToken
      }
      menuItems
      image
      location
      comments {
        nextToken
      }
    }
    text
    createdAt
    createdBy
  }
}
`
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    talkId
    clientId
    talk {
      id
      title
      description
      startTime
      endTime
      talkType
      sponsor
      speakers {
        nextToken
      }
      menuItems
      image
      location
      comments {
        nextToken
      }
    }
    text
    createdAt
    createdBy
  }
}
`
