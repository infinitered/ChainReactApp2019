// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from "graphql-tag"

export const createSpeaker = `mutation CreateSpeaker($input: CreateSpeakerInput!) {
  createSpeaker(input: $input) {
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
export const updateSpeaker = `mutation UpdateSpeaker($input: UpdateSpeakerInput!) {
  updateSpeaker(input: $input) {
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
export const deleteSpeaker = `mutation DeleteSpeaker($input: DeleteSpeakerInput!) {
  deleteSpeaker(input: $input) {
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
export const createTalk = `mutation CreateTalk($input: CreateTalkInput!) {
  createTalk(input: $input) {
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
export const updateTalk = `mutation UpdateTalk($input: UpdateTalkInput!) {
  updateTalk(input: $input) {
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
export const deleteTalk = `mutation DeleteTalk($input: DeleteTalkInput!) {
  deleteTalk(input: $input) {
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
export const createComment = `
  mutation CreateComment(
    $clientId: ID!
    $talkId: ID
    $text: String
    $createdAt: String
    $createdBy: String
    $id: ID
  ) {
    createComment(
      input: {
        clientId: $clientId
        talkId: $talkId
        text: $text
        createdAt: $createdAt
        createdBy: $createdBy
        id: $id
      }
    ) {
      id
      clientId
      text
      createdAt
      createdBy
      talkId
    }
  }
`
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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

export const createReport = `
  mutation createReport($comment: String! $commentId: ID!, $talkTitle: String!) {
    createReport(input: {
      comment: $comment
      commentId: $commentId
      talkTitle: $talkTitle
    }) {
      id comment commentId talkTitle
    }
  }
`
