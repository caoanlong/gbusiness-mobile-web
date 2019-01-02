import moment from 'moment'

export const transDate = function (input, type) {
    return moment(input).format(type)
}