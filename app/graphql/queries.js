// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from "graphql-tag"

export const listCommentsForTalk = gql`
  query listCommentsForTalk($talkId: ID) {
    listCommentsForTalk(talkId: $talkId) {
      items {
        id
        talkId
        text
        clientId
        createdAt
        createdBy
      }
    }
  }
`

export const getSpeaker = `query GetSpeaker($id: ID!) {
  getSpeaker(id: $id) {
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
export const listSpeakers = `query ListSpeakers(
  $filter: ModelSpeakerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      talk {
        id
        title
        description
        startTime
        endTime
        talkType
        sponsor
        menuItems
        image
        location
      }
    }
    nextToken
  }
}
`
export const getTalk = `query GetTalk($id: ID!) {
  getTalk(id: $id) {
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
export const listTalks = gql`
  query ListTalks {
    listTalks {
      items {
        id
        endTime
        startTime
        talkType
        title
        description
        speakers {
          items {
            id
            name
            bio
            employer
            twitter
            github
            image
            medium
          }
        }
      }
    }
  }
`
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        menuItems
        image
        location
      }
      text
      createdAt
      createdBy
    }
    nextToken
  }
}
`
